// Core
import React, { Component, createContext } from "react";
// Instruments
import { userSignIn, userSignOut } from "../utils/auth";

export const AccountContext = createContext({
  user: {
    id: null,
    role: null,
    companyId: null,
    name: "",
    email: "",
    avatar: "",
    phone: ""
  },
  authorized: false,
  authError: null,
  token: null,
  signIn: () => null,
  signOut: () => null
});

const INITIAL_STATE = {
  user: {
    id: null,
    role: null,
    companyId: null,
    name: "",
    email: "",
    avatar: "",
    phone: ""
  },
  authorized: false,
  authError: null,
  token: null
};

export default class AccountProvider extends Component {
  static Consumer = AccountContext.Consumer;

  state = { ...INITIAL_STATE };

  signIn = user => {
    localStorage.clear();
    userSignIn(user).then(response => {
      if (!response || (response.status && response.status >= 401) || response === "Unauthorized" || response.access_token === undefined) {
        this.setState(
          {
            authError: response.text || response || 'Unknown error'
          },
          () => console.log(this.state.authError)
        );

        return;
      }

      localStorage.setItem("token", response.access_token);

      const user = {
        id: response.id,
        name: response.name,
        email: response.email,
        phone: response.phone,
        role: response.role_id
        // companyId: response.user.company_id
      };

      localStorage.setItem("user", JSON.stringify(user));

      this.setState({
        user,
        authorized: true,
        authError: null,
        token: response.access_token
      });
    });
  };

  signOut = () => {
    const token = localStorage.getItem("token");
    userSignOut(token);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.resetState();
  };

  resetState = () => {
    this.setState({
      ...INITIAL_STATE
    });
  };

  render() {
    const accountApi = {
      ...this.state,
      signIn: this.signIn,
      signOut: this.signOut
    };
    return (
      // value prop is where we define what values
      // that are accessible to consumer components
      <AccountContext.Provider value={accountApi}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}
