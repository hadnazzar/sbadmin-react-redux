import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class AlertNotification extends Component {

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
    return(
      <NavDropdown isOpen={this.state.dropdownOpen} 
        toggle={this.toggle.bind(this)}
        className="mr-lg-2">
        <DropdownToggle nav caret>
          <i className="fa fa-fw fa-bell"></i>
          <span className="d-lg-none">Alerts
            <span className="badge badge-pill badge-warning">6 New</span>
          </span>
          <span className="indicator text-warning d-none d-lg-block">
            <i className="fa fa-fw fa-circle"></i>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>New Alerts:</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <span className="text-success">
              <strong><i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <span className="text-danger">
              <strong>
                <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <span className="text-success">
              <strong><i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="small" href="#">View all alerts</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    );
  }
}

export default AlertNotification;