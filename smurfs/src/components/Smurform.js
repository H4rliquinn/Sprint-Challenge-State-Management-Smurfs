import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
const Form = props => {
  const [smurf, setsmurf] = useState({ name: "", email: "", position: "" });

  const changeHandler = e => {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.addMember(teamMember);
    setTeamMember({ name: "", email: "", position: "" });
  };

  useEffect(() => {
    if (props.memberToEdit) {
      console.log("edit!");
      setTeamMember(props.memberToEdit);
    }
  }, [props.memberToEdit]);

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
            value={teamMember.name}
          />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email: </label>
          <input
            onChange={changeHandler}
            name="email"
            type="text"
            placeholder="Email Here"
            value={teamMember.email}
          />
        </div>
        <div className="formItem">
          <label htmlFor="position">Role: </label>
          <input
            onChange={changeHandler}
            name="position"
            type="text"
            placeholder="Role Here"
            value={teamMember.position}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
