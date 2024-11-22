import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validasi atau proses login bisa ditambahkan di sini
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/beranda'); // Setelah login berhasil, arahkan ke halaman profile
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login ke Ocean Escape</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan email"
            />
          </div>

          {/* Input Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan password"
            />
          </div>

          {/* Tombol Login */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Tautan Register */}
        <p className="text-center mt-4 text-gray-600">
          Belum punya akun?{' '}
          <button onClick={() => navigate('/register')} className="text-blue-500 hover:underline">
            Daftar di sini
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
