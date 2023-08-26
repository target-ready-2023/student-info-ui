import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import axios from 'axios';
import { useParams } from "react-router-dom";

const AllStudentsTable = () => {
  const { classNumbers } = useParams();
  const selectedClasses = classNumbers.split(",").map(Number);
  const [students, setStudents] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState(["id", "firstName", "lastName", "age"]);
  const [filterBarTitle, setFilterBarTitle] = useState("Filter Columns");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/students?standardList=${selectedClasses.join(",")}`);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching student data", error);
      }
    };
    fetchStudents();
  }, []);

  const handleChange = (event) => {
    setSelectedColumns(event.target.value);
  };


  const columnMapping = {
    id: "Student ID",
    firstName: "First Name",
    lastName: "Last Name",
    age: "Age",
    gender: "Gender",
    standard: "Standard",
    emailId: "Email",
    transport:"Transport",
  };

  const allColumns = Object.keys(columnMapping);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = students.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(students.length / recordsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" style={{marginLeft: "2%"}}>
          <b>Student Details Table</b>
        </Typography>

        <FormControl style={{ minWidth: "150px" }}>
          {/* <Typography variant="subtitle1">{filterBarTitle}</Typography> */}
          <Select
            multiple
            value={selectedColumns}
            onChange={handleChange}
            renderValue={() => <Typography variant="body1">{filterBarTitle}</Typography>}
          >
            {allColumns.map((column) => (
              <MenuItem key={column} value={column}>
                <Checkbox checked={selectedColumns.indexOf(column) > -1} />
                {columnMapping[column]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {selectedColumns.map((column) => (
                <TableCell key={column} style={{ fontWeight: "bold" }}>{columnMapping[column]}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {currentRecords.map((student) => (
              <TableRow key={student.id}>
                {selectedColumns.map((column) => (
                  <TableCell key={column}>{student[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "2px",
              padding: "5px 10px",
              background: currentPage === index + 1 ? "#ddd" : "transparent",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default AllStudentsTable;
