import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface IQTableProps {
  label: string;
  value: string;
}

interface IQTablePropsArray {
  data: any;
}

export const QTable = ({ data }: IQTablePropsArray) => {
  return (
    <TableContainer
      sx={{
        position: "relative",
        bottom: "1rem",
      }}
    >
      <Table>
        <TableBody>
          {data?.map((row: IQTableProps, rowIndex: number) => (
            <TableRow key={rowIndex}>
              <TableCell>{row?.label}</TableCell>
              <TableCell>{row?.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
