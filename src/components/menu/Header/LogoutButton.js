import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';

class LogoutButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <a className="nav-link" onClick={this.toggle}>
          <i className="fa fa-fw fa-sign-out"></i>&nbsp;Logout
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ready to Leave</ModalHeader>
          <ModalBody>
          Select "Logout" below if you are ready to end your current session.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={this.toggle}>Logout</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default LogoutButton;