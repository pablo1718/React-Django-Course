import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalUser(props) {
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>Student Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={props.onChangeName}
            value={props.name}
          />
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={props.onChangeEmail}
            value={props.email}
          />
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={props.onChangeMessage}
            value={props.message}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.edit}>
            Editar
          </Button>
          <Button variant="danger" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
