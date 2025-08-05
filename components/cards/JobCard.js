import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function JobCard(props) {
  const {expanded, companyLogo, imageURL, linkToCompany, companyName, jobTitle, jobType, jobSummary, jobDescriptionList, frameworkList } = props;

  return (
      <Card sx={expanded ? {overflowY:"scroll"} : {overflowY: "hidden"}} className="h-full w-full text-left p-6 rounded-2xl shadow-2xl transform-style-preserve-3d">
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
        <CardMedia component="img" image={imageURL} alt={jobType} className="mt-5"
          sx={{ height: { sm: "40%", md: "40%", lg: "40%" }, objectFit: "scale-down" }} />
        <CardContent className="mt-5">
          <Typography variant="body2" color="text.secondary">
            {jobSummary ? jobSummary : "No summary available."}
          </Typography>
        </CardContent>
        {props.expanded &&
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
            <Typography paragraph>{frameworkList ?? "N/A"}</Typography>
          </CardContent>}
      </Card>
    // </div>
  );
}
