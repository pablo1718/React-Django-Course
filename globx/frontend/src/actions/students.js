import { GET_STUDENTS, DELETE_STUDENT, CREATE_STUDENT } from "./types";
import axios from "axios";
import { createMessage, showErrors } from "./messages";
import { tokenConfig } from "./auth";

//GET STUDENTS LIST
export const getStudents = () => async (dispatch, getState) => {
  await axios
    .get(`/api/students`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_STUDENTS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch(showErrors(e.response.data, e.response.status));
    });
};

//DELETE ACTION
export const deleteStudent = (id) => async (dispatch, getState) => {
  await axios
    .delete(`/api/students/${id}`, tokenConfig(getState))
    .then((resp) => {
      dispatch({
        type: DELETE_STUDENT,
        payload: id,
      });
      dispatch(
        createMessage({
          studentDeleted: "Student deleted Succesfully",
        })
      );
    })
    .catch((e) => {
      dispatch(showErrors(e.response.data, e.response.status));
    });
};

//ADD STUDENT
export const createStudent = (data) => async (dispatch, getState) => {
  await axios
    .post("/api/students/", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_STUDENT,
        payload: res.data,
      });
      dispatch(
        createMessage({ studentCreated: "Student created successfully" })
      );
    })
    .catch((e) => dispatch(showErrors(e.response.data, e.response.status)));
};
