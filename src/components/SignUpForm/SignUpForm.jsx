import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <div className="title-wrapper">
            <h1 className="title">Create an account</h1>
        </div>
        <div className="login-container">
          <form autoComplete="off" onSubmit={this.handleSubmit} className="input-wrapper">
            <input type="text" className="login-input-box" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleChange} required />
            <input type="email" className="login-input-box" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <input type="password" className="login-input-box" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <input type="password" className="login-input-box" placeholder="Confirm Password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
<<<<<<< HEAD
            <button type="submit" disabled={disable} className="continue-btn">SIGN UP</button>
=======
            <button type="submit" disabled={disable} className="continue-btn">Sign Up</button>
>>>>>>> 2f645ec90679698066261558029032638d7bcd5e
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}