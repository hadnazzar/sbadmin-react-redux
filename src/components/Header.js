import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

import Sidebar from './menu/Sidebar';
import HeadMenu from './menu/HeadMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='lg' fixed='top' id='mainNav'>
          <NavbarBrand href='/'>Start Bootstrap React</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Sidebar />
            <ul className='navbar-nav sidenav-toggler'>
              <li className='nav-item'>
                <a
                  href='#'
                  className='nav-link text-center'
                  id='sidenavToggler'
                >
                  <i className='fa fa-fw fa-angle-left' />
                </a>
              </li>
            </ul>
            <HeadMenu />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
