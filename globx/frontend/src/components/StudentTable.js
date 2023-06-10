import React, { useEffect } from "react";
import { getStudents, deleteStudent } from "../actions/students";
import { useDispatch, useSelector } from "react-redux";

function Students() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.students);
  const { students, loading } = data;
  console.log(students);

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  return (
    <>
      <h2>Students Table</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteStudent(s.id))}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Students;
