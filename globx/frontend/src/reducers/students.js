import { CREATE_STUDENT, DELETE_STUDENT, GET_STUDENTS } from "../actions/types";

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
        students: state.students.filter((s) => payload !== s.id),
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
