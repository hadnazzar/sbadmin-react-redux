import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import ComponentMenu from './SideMenu/ComponentMenu';
import ExamplePageMenu from './SideMenu/ExamplePageMenu';
import NestedMenu from './SideMenu/NestedMenu';

const Sidebar = () => (
  <Nav vertical navbar className='navbar-sidenav'>
    <NavItem>
      <NavLink to='/'>
        <i className='fa fa-fw fa-dashboard' />&nbsp;
        <span className='nav-link-text'>Dashboard</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to='/charts'>
        <i className='fa fa-fw fa-area-chart' />&nbsp;
        <span className='nav-link-text'>Charts</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to='/datatable'>
        <i className='fa fa-fw fa-table' />&nbsp;
        <span className='nav-link-text'>Tables</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='#'>
        <i className='fa fa-fw fa-link' />&nbsp;
        <span className='nav-link-text'>Link</span>
      </NavLink>
    </NavItem>
  </Nav>
);

export default Sidebar;
