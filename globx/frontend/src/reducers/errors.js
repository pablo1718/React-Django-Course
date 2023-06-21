import { GET_ERRORS } from "../actions/types";

const initialState = {
  message: {},
  status: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return {
        ...state,
        message: payload.msg,
        status: payload.status,
      };
    default:
      return state;
  }
}
