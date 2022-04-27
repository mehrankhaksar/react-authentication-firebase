import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();

  const { logIn, logInWithGoogle } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await logIn(form.email, form.password);
      history.push('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  const logInWithGoogleHandler = async (e) => {
    e.preventDefault();
    try {
      await logInWithGoogle();
      history.push('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-md mx-auto w-full p-5">
        <div className="w-full flex flex-col items-center gap-6 py-10 px-5 border-2 rounded shadow">
          <h1 className="text-3xl font-semibold">Log In</h1>
          <form onSubmit={submitHandler} className="w-full space-y-5">
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
          <div className="w-full h-0.5 bg-black bg-opacity-20 rounded-sm"></div>
          <button
            className="flex items-center gap-2 text-white bg-blue-500 py-1.5 px-6 rounded"
            onClick={logInWithGoogleHandler}
          >
            <i className="uil uil-google text-2xl"></i>
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
