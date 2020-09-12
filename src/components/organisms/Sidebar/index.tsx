import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Sidebar: React.FC = () => {
  return (
    <Nav vertical>
      <NavItem>
        <Link to="/">Invoices</Link>
      </NavItem>
      <NavItem>
        <Link to="/create-invoice">Create invoice</Link>
      </NavItem>
      <NavItem>
        <Link to="/settings">Settings</Link>
      </NavItem>
    </Nav>
  );
};

export default Sidebar;
