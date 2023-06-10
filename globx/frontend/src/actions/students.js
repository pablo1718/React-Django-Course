import { GET_STUDENTS, DELETE_STUDENT, CREATE_STUDENT } from "./types";
import axios from "axios";

//GET STUDENTS LIST
export const getStudents = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/students`);
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//DELETE ACTION
export const deleteStudent = (id) => async (dispatch) => {
  const resp = await axios.delete(`/api/students/${id}`);
  try {
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
  console.log(resp.data);
};

//POST STUDENT
export const createStudent = (data) => async (dispatch) => {
  const res = await axios.post("/api/students/", data);
  try {
    dispatch({
      type: CREATE_STUDENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
