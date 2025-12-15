import React, { useState } from 'react';
import { db } from '../firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import PhoneIcon from './icons/PhoneIcon';
const ConsultationForm: React.FC = () => {
  const [situation, setSituation] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Basic validation
    if (!phone.trim()) {
      setError('Please provide your contact number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // COMMENTED OUT: Payment logic (keep for later use)
      /*
      // Step 1: Create payment via HTTP endpoint (using Vite proxy)
      const createRes = await fetch('/api/createPayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone.trim(), amount: 500 }),
      });
      if (!createRes.ok) {
        const err = await createRes.json();
        throw new Error(err.error || 'Failed to create payment');
      }
      const createData = await createRes.json();
      const { paymentID } = createData;

      // Step 2: Execute payment (simulate success) using Vite proxy
      await new Promise(resolve => setTimeout(resolve, 1000));
      const executeRes = await fetch('/api/executePayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentID }),
      });
      if (!executeRes.ok) {
        const err = await executeRes.json();
        throw new Error(err.error || 'Payment execution failed');
      }
      const executeData = await executeRes.json();
      if (executeData.status !== 'completed') {
        throw new Error('Payment not completed.');
      }
      */

      // Save consultation directly to Firestore (without payment)
      await addDoc(collection(db, 'consultations'), {
        phone: phone.trim(),
        situation: situation.trim(),
        paid: false, // Mark as not paid since we're bypassing payment
        amount: 0,
        currency: 'BDT',
        paymentID: null,
        createdAt: serverTimestamp(),
        status: 'pending',
      });

      setSuccess(true);
      setSituation('');
      setPhone('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bangla-text">
            এখানে আপনার রোগের কথা লিখুন
          </h2>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="situation" className="block text-sm font-medium text-gray-700 mb-2 ">
              Describe your symptoms or medical situation (optional)
            </label>
            <textarea
              id="situation"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="e.g., I have had a fever and cough for three days..."
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">
              You can leave this empty if you prefer to explain over the phone.
            </p>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="+8801XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">
              We'll call you on this number to discuss your medical situation.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
              <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
              <p>Your consultation request has been recorded. Our admin will call you within 30 minutes.</p>
              <p className="mt-2 text-sm">Thank you for contacting us.</p>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Send Message to Advisor'
              )}
            </button>
            <p className="mt-3 text-center text-sm text-gray-500">
              Your message will be sent directly to our medical advisors. Our admin will call you shortly to discuss your situation.
            </p>
          </div>
         
        </form>
         <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://wa.me/8801628617785"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:from-cyan-500 hover:to-blue-600"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call For Urgent Advice
              </a>
            </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">How it works:</h3>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0">1</span>
              <span>Fill in your contact number and optionally describe your medical situation.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0">2</span>
              <span>Click "Send Message to Advisor" to submit your consultation request.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0">3</span>
              <span>Your information is immediately recorded in our secure system.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0">4</span>
              <span>Our medical admin will call you within 30 minutes to discuss further.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
