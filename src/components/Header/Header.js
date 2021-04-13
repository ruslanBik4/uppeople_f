// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Dropdown,
  NavItem,
  NavLink
} from "reactstrap";
import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
// Instruments
import "./Header.css";
import companyLogo from "../../assets/img/company_logo.jpg";

const propTypes = {
  children: PropTypes.node,
  onLogout: PropTypes.func
};

const defaultProps = {
  children: [],
  onLogout: () => null
};

class Header extends Component {
  state = {
    dropdownOpen: false
  };
  toggle = () => {
    this.setState(prev => ({
      dropdownOpen: !prev.dropdownOpen
    }));
  };
  redirectToHomePage = () => {
    const { companyId, history } = this.props;
    switch (this.props.userRole) {
      case 2:
        return history.push("/dashboardrecruiter");
      case 4:
        return history.push("/candidates");
      case 5:
        return history.push(`/companies/${companyId}`);
      default:
        history.push("/dashboard");
    }
  };
  render() {
    const { email, userRole } = this.props.user;
    const ver = this.props.ver;
    console.log(ver)
    return (
      <>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          onClick={this.redirectToHomePage}
          style={{ color: "var(--white)", cursor: "pointer" }}
          // full={{ src: logo, width: 89, height: 25, alt: "CoreUI Logo" }}
          // minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
        >
          <span style={{ fontWeight: "bold" }}>UP</span>People
        </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {userRole === 1 && (
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink style={{ color: "var(--white)" }} href="/">
                Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        )}
        <Nav className="ml-auto" navbar>
          {/*<NavItem className="d-md-down-none">
            <NavLink href="#">
              <i style={{ color: "var(--white)" }} className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem> */}
           <h6 style={{ marginBottom: 0, marginRight: 50 }}>{email}</h6>
          <AppHeaderDropdown direction="down">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle
                nav
                // isOpen={this.state.dropdownOpen}
                // toggle={this.toggle}
              >
                {/* <img src={avatar} className="img-avatar" alt={name} /> */}
                <img
                  src={companyLogo}
                  className="header_logo"
                  alt="company_logo"
                />
                <span className="logo_text">UPPeople: {ver}</span>
              </DropdownToggle>
              <DropdownMenu right style={{ right: "auto" }}>
                <DropdownItem header tag="div" className="text-center">
                  <strong>Account</strong>
                </DropdownItem>
                {/* <DropdownItem>
                  <i className="fa fa-bell-o" /> Updates
                  <Badge color="info">42</Badge>
                </DropdownItem> */}
                <DropdownItem
                  onClick={() => this.props.history.push("/email/inbox")}
                >
                  <i className="fa fa-envelope-o" /> Messages
                  {/* <Badge color="success">42</Badge> */}
                </DropdownItem>
                {/* <DropdownItem>
                  <i className="fa fa-tasks" /> Tasks
                  <Badge color="danger">42</Badge>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-comments" /> Comments
                  <Badge color="warning">42</Badge>
                </DropdownItem>
                <DropdownItem header tag="div" className="text-center">
                  <strong>Settings</strong>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-user" /> Profile
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-wrench" /> Settings
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-file" /> Projects
                  <Badge color="primary">42</Badge>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className="fa fa-shield" /> Lock Account
                </DropdownItem> */}
                <DropdownItem onClick={e => this.props.onLogout(e)}>
                  <i className="fa fa-lock" /> Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
