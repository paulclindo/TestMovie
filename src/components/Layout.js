import React, { Component } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../assets/styles/App.scss";
import Home from "./../containers/Home";

class Layout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Sidebar></Sidebar>
        <Home></Home>
      </React.Fragment>
    );
  }
}

export default Layout;
