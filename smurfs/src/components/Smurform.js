import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import "./App.css";

const Form = props => {
  const [smurf, setsmurf] = useState({ name: "", age: "", height: "" });

  const changeHandler = e => {
    setsmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setsmurf({ name: "", age: "", height: "" });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="formItem">
          <label htmlFor="name">Name: </label>
          <input
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="Name Here"
            value={smurf.name}
          />
        </div>
        <div className="formItem">
          <label htmlFor="email">Age: </label>
          <input
            onChange={changeHandler}
            name="age"
            type="text"
            placeholder="Age Here"
            value={smurf.age}
          />
        </div>
        <div className="formItem">
          <label htmlFor="position">Height: </label>
          <input
            onChange={changeHandler}
            name="height"
            type="text"
            placeholder="Height Here"
            value={smurf.height}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(Form);
