import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar: React.FC = () => {
  return (
    <Nav vertical>
      <NavItem>
        <Link to="/">
          <NavLink>Invoices</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/create-invoice">
          <NavLink>Create invoice</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/settings">
          <NavLink>Settings</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
};

export default Sidebar;
