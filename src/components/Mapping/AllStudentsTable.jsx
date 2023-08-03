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

import Studentservice from "../services/Studentservice";

const AllStudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState(["id", "firstName", "lastName", "age"]);
  const [filterBarTitle, setFilterBarTitle] = useState("Filter Columns");

  useEffect(() => {
    Studentservice.getAllStudents()
      .then((response) => {
        setStudents(response.data);
        const sortedStudents = response.data.sort((a, b) => a.id - b.id);
        setStudents(sortedStudents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); console.log(students);

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
    // Add more mappings here
  };

  const allColumns = Object.keys(columnMapping);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5">
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
            {students.map((student) => (
              <TableRow key={student.id}>
                {selectedColumns.map((column) => (
                  <TableCell key={column}>{student[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllStudentsTable;
