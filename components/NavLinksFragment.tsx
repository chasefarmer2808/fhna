import React from 'react';
import { NavLink } from './NavLink';

export const NavLinksFragment: React.FC = () => {
  return (
    <>
      <NavLink href="/" label="Home" />
      <NavLink href="/about" label="About" />
      <NavLink href="/meetings" label="Meetings" />
      <NavLink href="/get-involved" label="Get Involved" />
    </>
  );
};
