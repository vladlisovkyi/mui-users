import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <Toolbar />
      {children}
    </Box>
  );
};

export default Content;
