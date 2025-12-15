import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import cors from 'cors';

admin.initializeApp();
const db = admin.firestore();

const corsHandler = cors({ origin: true });

// Helper to generate mock payment ID
const generatePaymentId = () => `bkash${Date.now()}${Math.floor(Math.random() * 1000)}`;

// HTTP endpoint for creating payment (with CORS)
export const createPayment = functions.https.onRequest(async (req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { phone, amount = 500 } = req.body;

      if (!phone) {
        res.status(400).json({ error: 'Phone number is required.' });
        return;
      }

      const paymentID = generatePaymentId();
      const createTime = new Date().toISOString();

      const paymentRef = db.collection('bkashPayments').doc(paymentID);
      await paymentRef.set({
        paymentID,
        phone,
        amount,
        currency: 'BDT',
        status: 'initiated',
        createTime,
        updateTime: createTime,
      });

      res.status(200).json({
        paymentID,
        bkashURL: `https://sandbox.bkash.com/payment/${paymentID}`, // mock URL
        createTime,
      });
    } catch (error: any) {
      console.error('Create payment error:', error);
      res.status(500).json({ error: error.message });
    }
  });
});

// HTTP endpoint for executing payment (with CORS)
export const executePayment = functions.https.onRequest(async (req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { paymentID } = req.body;

      if (!paymentID) {
        res.status(400).json({ error: 'Payment ID is required.' });
        return;
      }

      const paymentRef = db.collection('bkashPayments').doc(paymentID);
      const paymentDoc = await paymentRef.get();

      if (!paymentDoc.exists) {
        res.status(404).json({ error: 'Payment not found.' });
        return;
      }

      const updateTime = new Date().toISOString();
      await paymentRef.update({
        status: 'completed',
        updateTime,
      });

      res.status(200).json({
        paymentID,
        status: 'completed',
        transactionID: `TXN${Date.now()}`,
        updateTime,
      });
    } catch (error: any) {
      console.error('Execute payment error:', error);
      res.status(500).json({ error: error.message });
    }
  });
});

// HTTP endpoint for querying payment (with CORS)
export const queryPayment = functions.https.onRequest(async (req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { paymentID } = req.query;

      if (!paymentID) {
        res.status(400).json({ error: 'Payment ID is required.' });
        return;
      }

      const paymentRef = db.collection('bkashPayments').doc(paymentID as string);
      const paymentDoc = await paymentRef.get();

      if (!paymentDoc.exists) {
        res.status(404).json({ error: 'Payment not found.' });
        return;
      }

      res.status(200).json(paymentDoc.data());
    } catch (error: any) {
      console.error('Query payment error:', error);
      res.status(500).json({ error: error.message });
    }
  });
});

// Keep the callable functions for backward compatibility (optional)
export const bkashCreatePayment = functions.https.onCall(async (data: any, context: functions.https.CallableContext) => {
  const { phone, amount = 500 } = data;

  if (!phone) {
    throw new functions.https.HttpsError('invalid-argument', 'Phone number is required.');
  }

  const paymentID = generatePaymentId();
  const createTime = new Date().toISOString();

  const paymentRef = db.collection('bkashPayments').doc(paymentID);
  await paymentRef.set({
    paymentID,
    phone,
    amount,
    currency: 'BDT',
    status: 'initiated',
    createTime,
    updateTime: createTime,
  });

  return {
    paymentID,
    bkashURL: `https://sandbox.bkash.com/payment/${paymentID}`,
    createTime,
  };
});

export const bkashExecutePayment = functions.https.onCall(async (data: any, context: functions.https.CallableContext) => {
  const { paymentID } = data;

  if (!paymentID) {
    throw new functions.https.HttpsError('invalid-argument', 'Payment ID is required.');
  }

  const paymentRef = db.collection('bkashPayments').doc(paymentID);
  const paymentDoc = await paymentRef.get();

  if (!paymentDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Payment not found.');
  }

  const updateTime = new Date().toISOString();
  await paymentRef.update({
    status: 'completed',
    updateTime,
  });

  return {
    paymentID,
    status: 'completed',
    transactionID: `TXN${Date.now()}`,
    updateTime,
  };
});

// After payment success, store consultation data
export const saveConsultationAfterPayment = functions.firestore
  .document('bkashPayments/{paymentID}')
  .onUpdate(async (change: functions.Change<functions.firestore.DocumentSnapshot>, context: functions.EventContext) => {
    const before = change.before.data();
    const after = change.after.data();

    if (before?.status !== 'completed' && after?.status === 'completed') {
      const { phone, amount } = after!;

      await db.collection('consultations').add({
        phone,
        situation: '',
        paid: true,
        amount,
        currency: 'BDT',
        paymentID: context.params.paymentID,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        status: 'pending',
      });

      console.log(`Consultation saved for ${phone} via payment ${context.params.paymentID}`);
    }
  });
