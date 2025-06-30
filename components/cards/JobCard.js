import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function JobCard(props) {
  const { companyLogo, imageURL, linkToCompany, companyName, jobTitle, jobType, jobSummary, jobDescriptionList, frameworkList } = props;

  return (
    <div className="bg-blue p-6 rounded-2xl shadow-2xl transform-style-preserve-3d">
      <Card
        sx={{
          overflow: "hidden",
          height: "100%",
          boxShadow: 3,
          textAlign: "left",
          padding: 1,
          width: { sx: "100vw", md: "30vw", lg: "35vw" },
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
        {props.expanded &&
          <CardContent>
            <Typography paragraph>
              <b>Description:</b>
            </Typography>
            <Typography paragraph>
              <b>Frameworks Used:</b>
            </Typography>
            <Typography paragraph>{frameworkList ?? "N/A"}</Typography>
          </CardContent>}
      </Card>
    </div>
  );
}
