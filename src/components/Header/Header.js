import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <NavLink to={'/dogs/new'}>Add Dog</NavLink>
        <NavLink to={'/'}>Home</NavLink>
      </ul>
    </div>
  );
}
