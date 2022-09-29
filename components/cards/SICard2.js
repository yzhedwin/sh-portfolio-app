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

export default function SICard2() {
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
        subheader="Software Developer"
      />
      <CardMedia component="img" height="250" /*image={}*/ alt="SI Fix Term" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          2 Months Fixed Term Contract at S&I Systems Pte Ltd as a Software
          Developer from Oct 2022 to Dec 2022
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
          <Typography paragraph>-</Typography>
          <Typography paragraph>
            <b>Frameworks Used:</b>
          </Typography>
          <Typography paragraph>-</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
