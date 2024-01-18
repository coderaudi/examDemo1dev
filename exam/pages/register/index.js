import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterPage = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // Perform registration logic here (e.g., send registration request to the server)
    console.log('Register with:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <label className="block mb-2">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <button
          type="button"
          onClick={handleRegister}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
        >
          Register
        </button>
        <button
            type="button"
            onClick={()=>{
              router.push("/login")
            }}
            className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600"
          >
            Login
          </button>
      </div>
    </div>
  );
};

export default RegisterPage;
