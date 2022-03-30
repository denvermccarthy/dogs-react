import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ setUser }) {
  const [hasAccount, setHasAccount] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const submitCreds = async (e) => {
    e.preventDefault();
    try {
      {
        hasAccount
          ? await signInUser(username, password).then(({ email }) => setUser(email))
          : await signUpUser(username, password).then(({ email }) => setUser(email));
      }
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <div className={`flex justify-center`}>
      <div className="flex flex-col justify-center">
        <ul className="flex my-10 justify-center">
          <li
            className={` mx-5 ${hasAccount ? '' : 'underline'}`}
            onClick={() => setHasAccount(false)}
          >
            Sign Up
          </li>
          <li
            className={` mx-5 ${hasAccount ? 'underline' : ''}`}
            onClick={() => setHasAccount(true)}
          >
            Sign In
          </li>
        </ul>

        {error && <p>{error}</p>}
        <form className="flex flex-col items-center" onSubmit={submitCreds}>
          <label>
            Username:
            <input
              className="border-2 ml-2"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              className="border-2 ml-2 mt-5"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="mt-4 bg-slate-500 px-10 py-2 rounded-lg text-slate-200 hover:bg-slate-400 hover:text-slate-100 ">
            {hasAccount ? 'Sign In' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
}
