import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { LightTooltip } from "../ToolTips";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SICard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        avatar={<Avatar alt="si-logo" src="/assets/si-logo.png"></Avatar>}
        action={
          <Typography
            title="Visit S&I Webpage"
            variant="h6"
            noWrap
            component="a"
            href="https://si-asia.com/"
          >
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Typography>
        }
        title={"S&I Systems Pte Ltd"}
        subheader="Product Developer Intern"
      />
      <CardMedia component="img" height="250" image="/assets/dashboard-sep.png" alt="si-dash" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          6 Months Advanced Technology Attachment Programme from May 2022 to Oct
          2022
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <LightTooltip title="See more">
            <ExpandMoreIcon />
          </LightTooltip>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <b>Description:</b>
          </Typography>
          <Typography paragraph>
            Built a responsive dashboard to visualize real-time data from a
            time-series database with React.js, Express.js, InfluxDB, Telegraf,
            Node-Red and MQTT Mosquito.
          </Typography>
          <Typography paragraph>
            Integrated relational database and time-series database for more
            efficient data management.
          </Typography>
          <Typography paragraph>
            Created data pipeline to automate data acquisition from edge
            computers into database.
          </Typography>
          <Typography paragraph>
            Built an end to end demo application to send and receive real time
            data with InfluxDB, Telegraf, MQTT Mosquito, Node-Red, SpringBoot
            and Java.
          </Typography>
          <Typography paragraph>
            <b>Frameworks Used:</b>
          </Typography>
          <Typography paragraph>
            React, Express, MQTT Mosquito, InfluxDB, Giraffe Javascript Library,
            Node-Red, Docker.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
