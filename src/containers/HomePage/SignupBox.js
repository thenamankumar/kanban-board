import React from 'react';

import { validateName, validateEmail, validatePassword } from '../../utils/';

class SignupBox extends React.Component {
  state = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  validate = (state = this.state) => {
    const { name, email, password } = state;

    const nameError = validateName(name).error;
    const emailError = validateEmail(email).error;
    const passwordError = validatePassword(password).error;

    this.setState({
      nameError,
      emailError,
      passwordError,
    });

    return !nameError && !emailError && !passwordError;
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
      nameError: '',
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
      emailError: '',
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value,
      passwordError: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.validate()) {
      // TODO: add firebase integration
    }
  };

  render() {
    const { showLogin } = this.props;

    return (
      <div className="col-lg-5 col-md-7">
        <div className="card bg-secondary shadow border-0">
          <div className="card-header bg-white pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign up with</small>
            </div>
            <div className="btn-wrapper text-center">
              <a href="#" className="btn btn-neutral btn-icon">
                <span className="btn-inner--icon">
                  <img src="/public/assets/img/github.svg" />
                </span>
                <span className="btn-inner--text">Github</span>
              </a>
              <a href="#" className="btn btn-neutral btn-icon">
                <span className="btn-inner--icon">
                  <img src="/public/assets/img/google.svg" />
                </span>
                <span className="btn-inner--text">Google</span>
              </a>
            </div>
          </div>
          <div className="card-body px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <form role="form" onSubmit={this.handleSubmit}>
              <div className="form-group mb-3">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="ni ni-hat-3" />
                    </span>
                  </div>
                  <input className="form-control" placeholder="Name" type="text" onChange={this.handleNameChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="ni ni-email-83" />
                    </span>
                  </div>
                  <input className="form-control" placeholder="Email" type="email" onChange={this.handleEmailChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="ni ni-lock-circle-open" />
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    onChange={this.handlePasswordChange}
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary my-4">
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 pointer text-left">
            <small onClick={showLogin}>Already have an account?</small>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupBox;
