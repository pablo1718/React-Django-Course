import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";

function Alerts() {
  const error = useSelector((state) => state.errors);
  const message = useSelector((state) => state.messages);
  const alert = useAlert();

  //ERRORS ALERTS
  useEffect(() => {
    if (error.message.email) {
      alert.error(`Email: ${error.message.email.join()}`);
    }
    if (error.message.name) {
      alert.error(`Name: ${error.message.name.join()}`);
    }
    if (error.message.message) {
      alert.error(`Message: ${error.message.message.join()}`);
    }
    if (error.message.non_field_errors) {
      const msg = error.message.non_field_errors[0];
      alert.error(msg);
    }
    if (error.message.username) {
      const msg = error.message.username[0];
      alert.error(msg);
    }
  }, [error]);

  //SHOW MESSAGE ON DELETE, CREATE AND UPDATE
  useEffect(() => {
    if (message.studentDeleted) {
      alert.success(message.studentDeleted);
    }
    if (message.studentCreated) {
      alert.success(message.studentCreated);
    }
    if (message.passwordsNotMatch) {
      alert.error(message.passwordsNotMatch);
    }
  }, [message]);
  return <></>;
}

export default Alerts;
