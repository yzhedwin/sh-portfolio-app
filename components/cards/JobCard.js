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

export default function JobCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { companyLogo, imageURL, linkToCompany, companyName, jobTitle, jobType, jobSummary, jobDescriptionList, frameworkList } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", margin: "auto", padding: 2 }}>
      <CardHeader
        avatar={<Avatar alt="logo" src={companyLogo}></Avatar>}
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
      />
      <CardMedia component="img" image={imageURL} alt={jobType} sx={{ objectFit: "fill", maxHeight: 150 }} />
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
            <ExpandMoreIcon />
          </LightTooltip>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <b>Description:</b>
          </Typography>
          <>
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
          </>
          <Typography paragraph>
            <b>Frameworks Used:</b>
          </Typography>
          <Typography paragraph>{frameworkList ? frameworkList : "N/A"}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
