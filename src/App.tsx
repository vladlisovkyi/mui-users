import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import DrawerComponent from "./components/Drawer/Drawer";
import Content from "./components/Content/Content";

import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import UserCards from "./components/UserCads/UserCards";
import UserGrid from "./components/DataGrid/DataGrid";
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <DrawerComponent
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Content>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/users" element={<UserCards />} />
        <Route path="/data" element={<UserGrid />} />
      </Routes>
      </Content>
    </Box>
  );
}

export default App;
