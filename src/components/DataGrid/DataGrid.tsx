import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { useUserContext } from "../../context/userContext";
import { Paper, Typography } from "@mui/material";
import { formatDate } from "../../helpers/formatDate";

const columns = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => {
      return <Typography sx={{ color: "blue" }}>{params.value}</Typography>;
    },
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 120,
  },
  {
    field: "preference",
    headerName: "Work Preference",
    minWidth: 150,
  },
];

export default function UserGrid() {
  const { users } = useUserContext();

  const rows = users.map((user, index) => ({
    id: index,
    name: user.name,
    role: user.job,
    skills: user.skills.join(", "),
    startDate: formatDate(user.date),
    preference: user.preference,
  }));

  return (
    <Paper sx={{ minHeight: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pagination
        components={{
          Toolbar: () => (
            <GridToolbarContainer
              sx={{
                justifyContent: "flex-end",
                "& button": { border: "none" },
                "& .MuiBox-root": { display: "none" },
              }}
            >
              <GridToolbarExport />
            </GridToolbarContainer>
          ),
        }}
        initialState={{
          sorting: { sortModel: [{ field: "name", sort: "asc" }] },
        }}
        // componentsProps={{
        //   toolbar: {
        //     toolbarContainer: () => (
        //       <GridToolbarContainer>
        //         <GridToolbarExport />
        //         <Select
        //           label="Rows per page"
        //           value={pageSize}
        //           onChange={(event) => setPageSize(+event.target.value)}
        //         >
        //           {[5, 10, 20].map((option) => (
        //             <MenuItem key={option} value={option}>
        //               {option}
        //             </MenuItem>
        //           ))}
        //         </Select>
        //       </GridToolbarContainer>
        //     ),
        //   },
        // }}
      />
    </Paper>
  );
}
