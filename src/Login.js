import React, { Component } from 'react';
import {
  Modal,
  Button,
  FormGroup,
  formBasicText,
  ControlLabel,
  HelpBlock,
  FormControl
} from 'react-bootstrap';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      display: "normal",
      username: "",
      password: "",
    }
  }

  componentDidMount() {
    if(!this.props.onSubmit) {
      throw new Error("Login modal requires this.props.onSubmit to be registered");
    }
  }

  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  usernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  cb = () => {
    this.props.onSubmit(this.state.username, this.state.password)
      .then(() => {
        this.setState({display: "none"});
      })
      .catch(e => {
          this.setState({error: e})
      })
  }

  render() {
    return (
      <form style={{ display: this.state.display}}>
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
              {this.state.error}
            </Modal.Header>
            <Modal.Body>
              <FormGroup controlId="formBasicText" >
                <FormControl
                  type="text"
                  value={this.state.username}
                  placeholder="username"
                  onChange={this.usernameChange} />
              </FormGroup>
              <FormGroup controlId="formBasicText" >
                <FormControl
                  type="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.passwordChange} />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.cb}>Login</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </form>
    );
  }
}

export default Login;
