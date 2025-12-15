import React, { useState, useEffect, useMemo } from 'react';
import { db } from '../firebase.config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import SearchIcon from './icons/SearchIcon';

interface Consultation {
  id: string;
  phone: string;
  situation: string;
  paid: boolean;
  amount: number;
  currency: string;
  paymentID?: string;
  createdAt: any;
  status: string;
}

const AdminPanel: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Obfuscated password: 'doctorstrange' (reversed and encoded)
  const getAdminPassword = (): string => {
    const encoded = 'ZWduYXJ0c3JvdGNvZA==';
    const reversed = atob(encoded).split('').reverse().join('');
    return reversed;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === getAdminPassword()) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(collection(db, 'consultations'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Consultation[];
      setConsultations(data);
      setLoading(false);
    }, (err) => {
      console.error('Error fetching consultations:', err);
      setError('Failed to load consultations');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  // Filter consultations based on search term
  const filteredConsultations = useMemo(() => {
    if (!searchTerm.trim()) return consultations;
    
    const term = searchTerm.toLowerCase();
    return consultations.filter(consult => 
      consult.phone.toLowerCase().includes(term) ||
      (consult.situation && consult.situation.toLowerCase().includes(term)) ||
      (consult.paymentID && consult.paymentID.toLowerCase().includes(term)) ||
      consult.status.toLowerCase().includes(term)
    );
  }, [consultations, searchTerm]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredConsultations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedConsultations = filteredConsultations.slice(startIndex, startIndex + itemsPerPage);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h1>
          <p className="text-gray-600 mb-6">Enter the password to view consultation records.</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <a
              href="#"
              onClick={() => window.location.hash = ''}
              className="text-blue-600 hover:underline"
            >
              &larr; Back to main site
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Consultation Records</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Admin</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Logout
            </button>
            <a
              href="#"
              onClick={() => window.location.hash = ''}
              className="text-blue-600 hover:underline"
            >
              Back to site
            </a>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">Loading consultations...</p>
          </div>
        ) : (
          <>
            {/* Search and filter controls */}
            <div className="mb-6 bg-white p-4 rounded-xl shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Search by phone, situation, status, or payment ID..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold">{filteredConsultations.length}</span> of{' '}
                    <span className="font-semibold">{consultations.length}</span> total records
                  </div>
                </div>
              </div>
            </div>

            {/* Results table */}
            {filteredConsultations.length === 0 ? (
              <div className="bg-white rounded-xl shadow p-8 text-center">
                <p className="text-gray-700 text-lg">No consultation records found.</p>
                {searchTerm && (
                  <p className="text-gray-500 mt-2">Try a different search term.</p>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Situation
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment ID
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paginatedConsultations.map((consult) => (
                        <tr key={consult.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consult.createdAt?.toDate ? consult.createdAt.toDate().toLocaleString() : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {consult.phone}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                            {consult.situation || <span className="text-gray-400">(empty)</span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consult.currency} {consult.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${consult.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                              {consult.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                            {consult.paymentID || 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination controls */}
                {totalPages > 1 && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-700">
                        Page <span className="font-semibold">{currentPage}</span> of{' '}
                        <span className="font-semibold">{totalPages}</span> •{' '}
                        Showing <span className="font-semibold">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredConsultations.length)}</span> of{' '}
                        <span className="font-semibold">{filteredConsultations.length}</span> results
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`px-3 py-1 border rounded-lg text-sm font-medium ${currentPage === pageNum ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 text-sm text-gray-500">
              <p>Total records: {consultations.length} • Filtered: {filteredConsultations.length}</p>
              <p className="mt-2">Showing {itemsPerPage} records per page. Data updates in real‑time.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
