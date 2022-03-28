import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <NavLink to={'#'}>{/* New */}</NavLink>
        <NavLink to={'/'}>Home</NavLink>
      </ul>
    </div>
  );
}
