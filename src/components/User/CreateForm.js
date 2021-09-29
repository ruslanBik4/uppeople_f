// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, FormGroup, Input, Form } from "reactstrap";
import styles2 from "./Custom.css";

// Core
import moment from "moment";
import {Editor} from "react-draft-wysiwyg";
import {EditorState, convertToRaw} from "draft-js";
import draftToHtml from "draftjs-to-html";

const roles = [
  { value: 1, role: "Admin" },
  { value: 2, role: "Recruiter" },
  { value: 3, role: "Manager" },
  { value: 4, role: "Freelancer" },
  { value: 5, role: "Partners" }
];

const initialState = {
  name: "",
  password: "",
  email: "",
  phone: "",
  role: 1
};

export default class UserCreateForm extends Component {
  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired
  };

  state = {
    ...initialState
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.userRole === 2) {
      const role = roles[3].value;
      return {
        role
      };
    }
    return null;
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
    document.querySelector(".name").classList.remove("error");
    document.querySelector(".email").classList.remove("error");
    // document.querySelector({name}).classList.remove("error");
    let lblErrors = document.querySelector(".errorlist label");
    lblErrors.textContent = ("")
  };

  // handleNameChange = value => {
  //   this.setState({name: value});
  //   console.log(this.state.name)
  // }

  // handlePasswordChange = value => {
  //   this.setState({password: value});
  // };

  // handleEmailChange = value => {
  //   this.setState({email: value});
  // }

  // handlePhoneChange = value => {
  //   this.setState({phone: value});
  // }

  handleSelectChange = ({ currentTarget: { value } }) => {
    this.setState({
      role: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onAddUser, onRequestClose } = this.props;
    let isValid = true;
    let {
      name,
      password,
      email,      
      phone,
      role,
    } = this.state;

    if (this.state.email === "") {
      isValid = false;
      document.querySelector('.email').classList.add('error');
      let lblErrors = document.querySelector(".errorlist label");
      lblErrors.textContent = ("Необходимо заполнить email")
    }

    if (this.state.name === "") {
      isValid = false;
      document.querySelector('.name').classList.add('error');
      let lblErrors = document.querySelector(".errorlist label");
      lblErrors.textContent = ("Необходимо заполнить name")
    } else {
      name = String(name);
    }

    if (isValid) {
      // const user = this.state;
      const user = {
        name,
        password,
        email,
        phone,
        role,
      }
      user.role = Number(user.role);
      console.log(user.role);

      if (password === "") {
        delete user.password
      }
      
      if (phone === "") {
        delete user.phone
      }
      onAddUser(user);
      this.setState({ ...initialState });

      

      onRequestClose();

     
    }
    
    

    
  };

  render() {
    const { name, email, password, phone, role } = this.state;
    const { userRole } = this.props;

    const optionsForSelect = roles.map(option => (
      <option key={`${option.value}-${option.role}`} value={option.value}>
        {option.role}
      </option>
    ));

    const optionsForSelectRecruiter = (
      <option value={roles[3].value}>{roles[3].role}</option>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col className={"name"}>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleNameChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row className={"email"}>
          <Col className={"email"}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            {userRole === 2 ? (
              <Input
                type="select"
                value={role}
                onChange={this.handleSelectChange}
              >
                {optionsForSelectRecruiter}
              </Input>
            ) : (
              <Input
                type="select"
                value={role}
                onChange={this.handleSelectChange}
              >
                {optionsForSelect}
              </Input>
            )}
          </Col>
        </FormGroup>
        <Button color="primary" onClick={this.handleSubmit}>
          Create
        </Button>
        <FormGroup row>
          <Col md="10" className={"errorlist"} row>
            <label>
            </label>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
