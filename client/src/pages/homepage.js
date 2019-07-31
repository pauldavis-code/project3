import React, { Component } from "react";
import API from "./../util/user/API";

import { Input } from "./../components/Form"
import { SubmitBtn } from "./../components/Button"

class Homepage extends Component {
  state = {
    username: "",
    password: ""
  }

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmitSignUp = event => {
    event.preventDefault();
    if(this.state.username.length > 5) {
      API.createNewUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => this.setState({
        username: "",
        password: ""
      }))
    }
  }

  handleFormSubmitSignUp = event => {
    event.preventDefault();
    

  }

  render() {
    return(
      <div>
        <h1>Welcome to the homepage!</h1>

        <div className="row mt-4">
          <div className="col-6">
            <h3>Make a new account</h3>
            <Input 
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Enter your username"
            />

            <Input 
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Enter your password"
              type="password"
            />

            <SubmitBtn 
              type="submit" 
              onClick={this.handleFormSubmitSignUp}>
                Submit Form
            </SubmitBtn>
          </div>

          <div className="col-6">
            <h3>Log in</h3>
            <Input 
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Enter your username"
            />

            <Input 
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Enter your password"
              type="password"
            />

            <SubmitBtn 
              type="submit" 
              onClick={this.handleFormSubmit}>
                Submit Form
            </SubmitBtn>
          </div>
        </div>
      </div>
    );
  };
};

export default Homepage;