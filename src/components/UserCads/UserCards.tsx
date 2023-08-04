import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  List,
  ListItemText,
  Grid,
} from "@mui/material";

import { useUserContext } from "../../context/userContext";
import { formatDate } from "../../helpers/formatDate";

const UserCards: React.FC = () => {
  const { users } = useUserContext();

  return (
    <Grid container spacing={3}>
      {users.map((user, index) => (
        <Grid item key={index} xs={10} sm={5} md={6} lg={4}>
          <Card
            sx={{
              bgcolor: "background.default",
              borderRadius: "10px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "green" }}>
                  {user.name.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={user.name}
              subheader={user.job}
            />
            <CardContent>
              <Typography gutterBottom variant="body2">
                <strong>Start Date:</strong> {formatDate(user.date)}
              </Typography>
              <Typography gutterBottom variant="body2">
                <strong> Work Preference:</strong> {user.preference}
              </Typography>
              <Typography gutterBottom variant="body2" sx={{ mt: 2 }}>
                Skills:
              </Typography>
              <List dense sx={{ listStyleType: "disc", paddingLeft: "16px" }}>
                {user.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <ListItemText primary={skill} />
                  </li>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCards;
