import { ActionTypes } from "../config/constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EXAMPLE.GET.ONE.REDUCER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
