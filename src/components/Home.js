import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';

const Home = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const { email } = currentUser;

  const logOutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-md mx-auto w-full p-5">
        <div className="flex flex-col items-center gap-6 p-5 border-2 rounded-md shadow">
          <h1 className="text-xl font-medium">{email}</h1>
          <button
            onClick={logOutHandler}
            className="text-lg font-medium text-white bg-red-500 py-2 px-4 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
