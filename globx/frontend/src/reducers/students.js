import { GET_STUDENTS, DELETE_STUDENT, CREATE_STUDENT } from "../actions/types";

const initialState = {
  students: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
        loading: false,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((s) => s.id !== payload),
        loading: false,
      };
    case CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, payload],
        loading: false,
      };
    default:
      return state;
  }
}
