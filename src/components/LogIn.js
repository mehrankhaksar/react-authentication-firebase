import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  return (
    <div className="w-full">
      <div className="max-w-md mx-auto w-full space-y-6 py-10 px-5">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <form className="w-full space-y-5">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              className="py-1.5 px-2 border-2 rounded shadow-sm"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              className="py-1.5 px-2 border-2 rounded shadow-sm"
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full text-lg font-medium text-white bg-green-500 py-2 rounded"
          >
            Log In
          </button>
        </form>
        <p className="text-center">
          Need an account?{' '}
          <Link to="/signup" className="font-semibold text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
