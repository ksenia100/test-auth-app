import React, { useState, useEffect } from 'react';
import { auth } from "../firebase/firebaseConfig";
import { User, updateEmail, updatePassword } from 'firebase/auth';

type AdminPageProps = {
  user: User | null;
};

const AdminPage: React.FC<AdminPageProps> = ({ user }) => {
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (!user) {
      // Handle the case where there's no user, maybe redirect or show a message
    }
  }, [user]);

  const handleEmailChange = async () => {
    if (!user || !newEmail) {
      setMessage('Please provide a new email address.');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      await updateEmail(user, newEmail);
      setMessage('Email updated successfully.');
    } catch (err) {
      setMessage(`Error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    if (!user || !newPassword) {
      setMessage('Please provide a new password.');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      await updatePassword(user, newPassword);
      setMessage('Password updated successfully.');
    } catch (err) {
      setMessage(`Error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {user && (
        <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Welcome, {user.email}!
          </p>
          <img
            src={user.photoURL || 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-center text-lg font-semibold text-gray-800">
            Email: {user.email}
          </p>
          <input
            type="text"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleEmailChange}
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Email'}
          </button>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handlePasswordChange}
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
          {message && (
            <p className="mt-4 text-center text-sm text-red-600">{message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
