import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useUserContext } from "../../context/userContext";
import { formatDate } from "../../helpers/formatDate";

const UserTable: React.FC = () => {
  const { users } = useUserContext();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: "white", bgcolor: "#90d2e8" }}>
                {user.name}
              </TableCell>
              <TableCell sx={{ textTransform: "capitalize" }}>
                {user.job}
              </TableCell>
              <TableCell sx={{ textTransform: "capitalize" }}>
                {user.skills.join(", ")}
              </TableCell>
              <TableCell>{formatDate(user.date)}</TableCell>
              <TableCell>{user.preference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
