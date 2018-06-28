import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';

import MessageNotification from './Header/MessageNotification';
import AlertNotification from './Header/AlertNotification';
import SearchForm from './Header/SearchForm';
import LogoutButton from './Header/LogoutButton';

class HeadMenu extends Component {
  
  render() {
    return (
      <Nav navbar className="ml-auto">
        <MessageNotification />
        <AlertNotification />
        <SearchForm />
        <NavItem>
          <LogoutButton />
        </NavItem>
      </Nav>
    );
  }
}

export default HeadMenu;