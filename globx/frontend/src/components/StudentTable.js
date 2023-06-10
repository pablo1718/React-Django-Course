import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../actions/students";
import { useDispatch, useSelector } from "react-redux";
import ModalUser from "./ModalUser";

function Students() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.students);
  const { students, loading } = data;

  //STUDENT FIELDS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(0);

  //Modal show variable
  const [show, setShow] = React.useState(false);

  //SHOW THE MODAL WITH THE CURRETN VALUES
  const showModal = (id, name, email, message) => {
    setShow(!show);
    setId(id);
    setName(name);
    setEmail(email);
    setMessage(message);
  };

  //TODO IMPLEMENT UPDATE ACTION
  const updateUser = (event) => {
    event.preventDefault();
    const userUpdate = {
      name,
      email,
      message,
    };
    console.log(
      userUpdate.name + " HAVE ID: " + id + " IMPLEMENT UPDATE ACTION HERE..."
    );
    setShow(false);
  };

  //GET CURRRENT VALUES FROM THE MODAL
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  //CLOSE MODAL FUNCTION
  const closeModal = () => {
    return setShow(false);
  };

  // compenentDidMount & componentWillUpdate
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
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => dispatch(deleteStudent(s.id))}
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => showModal(s.id, s.name, s.email, s.message)}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ModalUser
        show={show}
        close={closeModal}
        edit={updateUser}
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangeMessage={onChangeMessage}
        name={name}
        email={email}
        message={message}
      />
    </>
  );
}

export default Students;
