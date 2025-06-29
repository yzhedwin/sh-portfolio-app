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
import { AnimatePresence, motion } from "framer-motion";

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

export default function JobCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { companyLogo, imageURL, linkToCompany, companyName, jobTitle, jobType, jobSummary, jobDescriptionList, frameworkList } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 1,
        textAlign: "left",
        boxShadow: 3,
        overflow: "hidden",
        height: { sx: expanded ? "100%" : "35vh", sm: expanded ? "100%" : "50vh", md: expanded ? "100%" : "40vh" },
        width: "100%",
      }}
    >
      <CardHeader
        avatar={<Avatar alt="logo" src={companyLogo} ></Avatar>}
        action={
          <Typography
            title={`Visit ${companyName} Webpage`}
            variant="h6"
            noWrap
            component="a"
            href={linkToCompany}

          >
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Typography>
        }
        title={companyName}
        subheader={jobTitle}
        sx={{ height: "13vh", textAlign: "left", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
      />
      <CardMedia component="img" image={imageURL} alt={jobType}
        sx={{ height: { sm: "35vh", md: "15vh" }, objectFit: "scale-down" }} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jobSummary ? jobSummary : "No summary available."}
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
            <ExpandMoreIcon sx={{ cursor: "grab" }} />
          </LightTooltip>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <motion.div
          key="desc"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          style={{ overflow: "hidden" }} // crucial to prevent content overflow during animation
        >
          <CardContent>
            <Typography paragraph>
              <b>Description:</b>
            </Typography>
            {Array.isArray(jobDescriptionList) && jobDescriptionList.length > 0 ? (
              jobDescriptionList.map((desc, index) => (
                <Typography key={index} paragraph>
                  {desc}
                </Typography>
              ))
            ) : (
              <Typography paragraph>
                No specific job experiences listed.
              </Typography>
            )}

            <Typography paragraph>
              <b>Frameworks Used:</b>
            </Typography>
            <Typography paragraph>{frameworkList ?? "N/A"}</Typography>
          </CardContent>
        </motion.div>
      </Collapse>
    </Card>
  );
}
