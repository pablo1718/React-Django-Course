import React from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function StudentPage() {
  return (
    <div className="container">
      <StudentForm />
      <StudentTable />
    </div>
  );
}

export default StudentPage;
