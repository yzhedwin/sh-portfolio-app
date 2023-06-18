/* eslint-disable no-unused-vars */
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
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

//TODO:
const sections = [
    { id: 1, title: "Work Experience" },
    { id: 2, title: "Projects" },
    { id: 3, title: "About Me" },
];
const authPage = [{ id: 1, title: "Asset" }];

export default function Header() {
    //MENU STUFF
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [navOpacity, setNavOpacity] = useState(1);
    const [direction, setDirection] = useState("up");
    const [scrollPos, setScrollPos] = useState(0);
    const { data: session } = useSession();
    let prevScrollY = 0;

    const navRef = useRef();
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
    useEffect(() => {
        if (direction === "up") {
            setNavOpacity(1);
        }
    }, [direction]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const renderLogoutBtn = () => {
        return (
            <Button
                onClick={() => signOut()}
                sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                }}
            >
                Logout
            </Button>
        );
    };
    const renderLoginBtn = () => {
        return (
            <Button
                onClick={() => signIn()}
                sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                }}
            >
                Login
            </Button>
        );
    };
    const renderHeaderButtons = () => {
        return (
            <>
                {authPage.map((page) => {
                    return (
                        <Button
                            href={"/" + page.title.toLowerCase()}
                            sx={{
                                my: 2,
                                color: "white",
                                display: "block",
                            }}
                        >
                            {page.title}
                        </Button>
                    );
                })}
                {renderLogoutBtn()}
            </>
        );
    };

    const renderEmpty = () => {
        return <div></div>;
    };

    return (
        <div>
            <AppBar
                style={{
                    opacity: navRef.current,
                    backgroundColor: "rgb(0, 1, 38)",
                    transition: "all 500ms ease-in-out",
                }}
                position="fixed"
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            title="home"
                            variant="h6"
                            noWrap
                            href="/"
                            component="a"
                            sx={{
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
                            variant="h6"
                            noWrap
                            href="/"
                            component="a"
                            sx={{
                                ml: 2,
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Edwin
                        </Typography>

                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                                {sections.map((section) => {
                                    return (
                                        <MenuItem key={section.id}>
                                            {section.title}
                                        </MenuItem>
                                    );
                                })}
                                {session ? (
                                    <MenuItem onClick={() => signOut()}>
                                        Logout
                                    </MenuItem>
                                ) : (
                                    <MenuItem onClick={() => signIn()}>
                                        Login
                                    </MenuItem>
                                )}
                            </Menu>
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            {sections.map((section) => {
                                return (
                                    <Button
                                        key={section.id}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {section.title}
                                    </Button>
                                );
                            })}
                            {session ? renderHeaderButtons() : renderLoginBtn()}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
