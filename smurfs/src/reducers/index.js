import {
  GET_SMURF,
  GET_SUCCESS,
  GET_FAIL,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_FAIL
} from "../actions";

// {
//     name: "",
//     age: 20,
//     height: "",
//     id: 0
//   }

const initialState = {
  messge: "",
  smurfs: []
};

export const rootReducer = (state = initialState, action) => {
  console.log("ACTION", action.type, action.payload);
  switch (action.type) {
    case GET_SMURF:
      return { ...state, message: action.payload };
    case GET_SUCCESS:
      return { message: "", smurfs: action.payload };
    case GET_FAIL:
      console.log(action.payload);
      return { ...state, message: action.payload };
    case ADD_SMURF:
      return { ...state, message: action.payload };
    case ADD_SUCCESS:
      return { message: "Smurf added", smurfs: action.payload };
    case ADD_FAIL:
      console.log(action.payload);
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
