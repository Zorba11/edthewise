import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "rank" | "name" | "mark" | "duration" | "state" | "price";
  label: string;
  minWidth?: number;
  align?: "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "rank", label: "Rank", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "mark", label: "Mark", minWidth: 100 },
  {
    id: "duration",
    label: "Duration",
    minWidth: 150,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "state",
    label: "State",
    minWidth: 100,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "left",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  rank: number;
  name: string;
  mark: number;
  duration: string;
  state: string;
  price: number;
}

function createData(rank: number, name: string, mark: number, duration: string, state: string, price: number): Data {
  return { rank, name, mark, duration, state, price };
}

const rows = [
  createData(1, "Alex Hinds", 96, "30 minutes 336 seconds", "Punjab", 900),
  createData(2, "John Smith", 85, "25 minutes 512 seconds", "California", 750),
  createData(3, "Jane Doe", 92, "28 minutes 421 seconds", "New York", 800),
  createData(4, "David Lee", 78, "32 minutes 123 seconds", "Texas", 650),
  createData(5, "Emily Chen", 89, "27 minutes 894 seconds", "Florida", 780),
  createData(6, "Michael Kim", 93, "29 minutes 765 seconds", "Illinois", 820),
  createData(7, "Sarah Park", 87, "26 minutes 987 seconds", "Virginia", 760),
  createData(8, "Daniel Lee", 81, "31 minutes 234 seconds", "Georgia", 700),
  createData(9, "Jessica Kim", 95, "30 minutes 678 seconds", "Arizona", 880),
  createData(10, "William Chen", 90, "28 minutes 543 seconds", "Ohio", 800),
];

export const LeaderBoard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        overflow: "hidden",
        height: "100%",
      }}
      elevation={3}
    >
      <TableContainer sx={{ maxHeight: "90%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        // sx={{
                        //   backgroundColor: addBGColor(column),
                        // }}
                        key={column.id}
                        align={column.align}
                      >
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
function addBGColor(column: Column, lighten = false) {
  switch (column.id) {
    case "rank":
      return !lighten ? "#FDCD46" : "f7dc91";
    case "name":
      return "#4B82C3";
    case "mark":
      return "#FDCD46";
    case "duration":
      return "#4B82C3";
    case "state":
      return "#FDCD46";
    case "price":
      return "#4B82C3";
    default:
      return "";
  }
}
