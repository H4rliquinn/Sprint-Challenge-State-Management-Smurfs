import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Village from "./Village.js";
import { getSmurf } from "../actions";

const App = ({ message, smurfs, getSmurf }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  // console.log("uEFFECT",message, smurfs);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <h2>{message}</h2>
      <Village />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(App);
