import React from "react";
import Button from "@material-ui/core/Button";
import Studentservice from "../services/Studentservice";

const DeleteStudentButton = ({ studentId, onDelete }) => {
  const handleDeleteStudent = () => {
    Studentservice.deleteStudentById(studentId)
      .then((response) => {
        alert("Student deleted successfully!");
        onDelete();
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleDeleteStudent}>
      Delete Student
    </Button>
  );
};

export default DeleteStudentButton;
