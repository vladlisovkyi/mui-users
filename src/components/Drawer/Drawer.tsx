import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import InputIcon from "@mui/icons-material/Input";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import { Link } from "react-router-dom";
export const drawerWidth = 240;

interface IDrawer {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const listData = [
  {
    title: "Input Form",
    link: "form",
    icon: <InputIcon />,
  },
  {
    title: "Contact Cards",
    link: "users",
    icon: <PersonIcon />,
  },
  {
    title: "Contact Table",
    link: "table",
    icon: <TableRowsIcon />,
  },
  {
    title: "Contact Data Table",
    link: "data",
    icon: <Grid3x3Icon />,
  },
];

const DrawerComponent: React.FC<IDrawer> = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const drawerContent = (
    <>
      <Divider />
      <List sx={{ marginTop: "4rem" }}>
        {listData.map((item) => (
          <ListItem key={item.link} disablePadding>
            <Link
              to={`/${item.link}`}
              style={{
                display: "block",
                textDecoration: "none",
                width: "100%",
                color: "inherit",
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
