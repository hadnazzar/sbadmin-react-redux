import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MessageNotification extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
        <DropdownToggle nav caret>
          <i className="fa fa-fw fa-envelope"></i>
          <span className="d-lg-none">Messages
           <span className="badge badge-pill badge-primary">12 New</span>
          </span>
          <span className="indicator text-primary d-none d-lg-block">
            <i className="fa fa-fw fa-circle"></i>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>New Messages:</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <strong>David Miller</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! 
              These messages clip off when they reach the end of the box so they don't overflow over to the sides!
            </div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <strong>Jane Smith</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <strong>John Doe</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="small" href="#">View all messages</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    );
  }
}

export default MessageNotification;