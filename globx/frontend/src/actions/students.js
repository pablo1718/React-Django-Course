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
  try {
    await axios.delete(`/api/students/${id}`);
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

//POST STUDENT ACTION
export const createStudent = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/students/`, data);
    dispatch({
      type: CREATE_STUDENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
