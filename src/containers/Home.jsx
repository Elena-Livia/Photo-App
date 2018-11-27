import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Photo App</h1>
          <p>A simple photo uploading app</p>
        </div>
      </div>
    );
  }
}