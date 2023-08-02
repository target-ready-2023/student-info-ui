import React from "react";
import Button from "@material-ui/core/Button";
import Studentservice from "../services/Studentservice";

const DeleteStudentButton = ({ studentId, onDelete }) => {
  const handleDeleteStudent = () => {
    // Call the delete action using the Studentservice
    Studentservice.deleteStudentById(studentId)
      .then((response) => {
        alert("Student deleted successfully!");
        // Redirect back to the student page
        // window.location.href = "/student";
        // Handle successful response, e.g., show a success message
        // console.log("Student deleted successfully!", response.data);
        // Call the onDelete function to notify the parent component about the deletion
        onDelete();
        // setStudentData({});
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
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
