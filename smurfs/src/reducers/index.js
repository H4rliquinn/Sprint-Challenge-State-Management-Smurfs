import { ADD_SMURF } from "../actions";

const initialState = {
  smurfs: [
    {
      name: "test",
      age: 20,
      height: "4mi",
      id: 0
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  console.log("ACTION", action.type);
  switch (action.type) {
    default:
      return state;
  }
};
