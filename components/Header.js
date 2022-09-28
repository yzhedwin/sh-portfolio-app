/* eslint-disable no-unused-vars */
import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Work Experience", "Projects", "About Me"];

const Header = () => {
  //MENU STUFF
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [navOpacity, setNavOpacity] = React.useState(1);
  const [direction, setDirection] = React.useState("up");
  const [scrollPos, setScrollPos] = React.useState(0);
  let prevScrollY = 0;

  const navRef = React.useRef();
  let count = 0;
  navRef.current = navOpacity;

  const handleScroll = () => {
    const pos = window.scrollY;
    setScrollPos(pos);
    //Nav Bar Animation
    if (window.scrollY > prevScrollY) {
      if (count < 10) {
        count++;
      }
      navRef.current = navRef.current - count / 10;
      setNavOpacity(navRef.current);
      setDirection("down");
    } else {
      count = 0;
      setDirection("up");
    }
    prevScrollY = window.scrollY;
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  React.useEffect(() => {
    if (direction === "up") {
      setNavOpacity(1);
    }
  }, [direction]);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderEmpty = () => {
    return <div></div>;
  };

  const render = () => {
    return (
      <div>
        <AppBar
          style={{
            opacity: navRef.current,
            backgroundColor: "rgb(0, 1, 38)",
          }}
          position="fixed"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{display: "flex", flexDirection	: "row"}}>
              <Typography
                title="home"
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  flexGrow:1,
                  ml: 2,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Edwin
              </Typography>
              <Typography
                title="xs-home"
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Edwin
              </Typography>
              <Box sx={{display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="xs-side-nav"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="xs-menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      // onClick={() => {
                      //   navigate("/" + page);
                      // }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    //onClick={}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  };
  //can be refractored to include more pages
  return render();
};
export default Header;
