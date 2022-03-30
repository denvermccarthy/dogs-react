import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-row justify-end px-16 py-6 bg-slate-500">
      <ul className="w-max flex justify-evenly">
        <li className="bg-blue-200 px-5 py-3 w-32 rounded-lg hover:underline">
          <NavLink to={'/dogs/new'}>Add Dog</NavLink>
        </li>
        <li className="bg-blue-200 px-5 py-3 w-32 ml-3 rounded-lg hover:underline">
          <NavLink to={'/'}>Home</NavLink>
        </li>
      </ul>
    </div>
  );
}
