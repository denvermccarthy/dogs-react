import React, { useState, useEffect } from 'react';

export default function Auth() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className={`flex justify-center`}>
      <ul className="flex px-10">
        <li
          className={`px-10 ${hasAccount ? '' : 'underline'}`}
          onClick={() => setHasAccount(false)}
        >
          Sign Up
        </li>
        <li
          className={`px-10 ${hasAccount ? 'underline' : ''}`}
          onClick={() => setHasAccount(true)}
        >
          Sign In
        </li>
      </ul>
    </div>
  );
}
