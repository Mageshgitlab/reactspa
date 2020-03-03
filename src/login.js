import React from "react";
import "./App.css";
import "./css/style.css";

class login extends React.Component {
  render() {
    var __html = require("./login.html");
    var template = { __html: __html };
    return <div dangerouslySetInnerHTML={template} />;
  }
}
export default login;
