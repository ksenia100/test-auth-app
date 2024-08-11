import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

  const validatePassword = (password: string) => PASSWORD_REGEX.test(password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validatePassword(password)) {
      setMessage("Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }
    
    setLoading(true);
    setMessage('');
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail(''); 
      setPassword(''); 
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000); 
    } catch (error) {
      if (error instanceof Error) {
        setMessage("Registration failed: " + error.message);
      } else {
        setMessage("Registration failed: Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Register</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button 
          type="submit" 
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-4 text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
  
};

export default RegisterPage;
