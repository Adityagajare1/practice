
import {Accordion, AppBar, Box, Button, Container, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography, makeStyles,} from"@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import kayakaLogo from "../assets/kayaka-logo.png"

// const useStyles=makeStyles({
//   typography : {

//   }
// })

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [subMenuOpen, setSubMenuOpen] = React.useState("");

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSubMenu = (menuTitle) => {
    setSubMenuOpen(menuTitle);
  };

  const handleCloseSubMenu = () => {
    setSubMenuOpen("");
  };

  let handleChange = (data) => {
    navigate(data);
  };
  // const classes=useStyles()
 
  // const location = useLocation()

  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      icon: <KeyboardArrowDownIcon />,
      // path: "/about",
      dropdown: [
        {
          title: "OverView",
          path: "/overview",
        },
        {
          title: "About founder",
          path: "/aboutfounder",
        },
        {
          title: "Vision & Mission",
          path: "/visionandmission",
        },
      ],
    },
    {
      title: "Admission",
      path: "/admission",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Facilities",
      path: "/facilities",
    },
    {
      title: "Results",
      path: "/results",
    },
    {
      title: "Achievements",
      path: "/achievements",
    },
    {
      title: "Contact Us",
      path: "/contactus",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#3c3d41",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container ml={6}>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <LocationOnIcon
              sx={{ color: "#80CD36", marginRight: "7px" }}
              fontSize="2px"
            />
            <Typography variant="body2" sx={{ color: "white" }}>
              Seventh Avenue,Newyork
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex" }} ml={2}>
            <CallIcon
              sx={{ color: "#80CD36", marginRight: "7px" }}
              fontSize="2px"
            />
            <Typography variant="body2" sx={{ color: "white" }}>
              +123-456-789
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }} ml={2}>
            <EmailIcon
              sx={{ color: "#80CD36", marginRight: "7px" }}
              fontSize="2px"
            />
            <Typography variant="body2" sx={{ color: "white" }}>
              info@yourcompany.com
            </Typography>
          </Grid>
        </Grid>
        <Box >
          <Grid
            container
            sx={{
              width: "40vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Button variant="text" sx={{ color: "white" }}>
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" sx={{ color: "white" }}>
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#71B52D",
                  "&:hover": {
                    backgroundColor: "#71B52D",
                  },
                  height: "60px",
                  borderRadius: "0px",
                }}
              >
                Apply Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#333" }}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <img
                src={kayakaLogo}
                alt=""
                height="120px"
                width="130px"
                style={{ marginLeft: "5vw" }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none", justifyContent: "flex-end" },
                }}
              >
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none", },
                  }}
                >
                  {menuItems.map((item) => {
                    if (item.dropdown) {
                      return (
                        <Accordion
                          key={item.title}
                          sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`submenu-${item.title}`}
                            id={`submenu-${item.title}`}
                          >
                            <Typography sx={{"&:hover": {
                              color: "#6f9a37",
                            },
                            }}>
                              {item.title}
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.path}
                                  style={{ textDecoration: "none", color: "#333" }}
                                  onClick={handleCloseNavMenu}
                                >
                                  <MenuItem sx={{"&:hover": {
                              color: "#6f9a37",
                            },}} onClick={handleCloseNavMenu}>
                                    {subItem.title}
                                  </MenuItem>
                                </Link>
                              ))}
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                      );
                    } else {
                      return (
                        <Link
                          key={item.title}
                          to={item.path}
                          style={{ textDecoration: "none", color: "#333"}}
                          onClick={handleCloseNavMenu}
                        >
                          <MenuItem sx={{"&:hover": {
                              color: "#6f9a37",
                            },}} onClick={handleCloseNavMenu}
                          >
                            {item.title}
                          </MenuItem>
                        </Link>
                      );
                    }
                  })}
                </Menu>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex", justifyContent: "flex-end" },
                }}
              >
                {menuItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <Box
                        key={item.title}
                        sx={{
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                        onMouseEnter={() => handleOpenSubMenu(item.title)}
                        onMouseLeave={handleCloseSubMenu}
                      >
                        <Button
                          component={Link}
                          to={item.path}
                          color="inherit"
                          onClick={() => handleChange(item.path)}
                          sx={{
                            textTransform: "none",
                            "&:hover": {
                              color: "#6f9a37",
                            },
                            padding: "0 15px",
                            minWidth: "100px",
                            fontSize: "15px",
                            height: "120px"
                          }}
                        >
                          {item.title}{item.icon}
                        </Button>
                        {subMenuOpen === item.title && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              width: "170px",
                              backgroundColor: "#fff",
                              zIndex: 1,
                              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            <List component="nav">
                              {item.dropdown.map((subItem) => (
                                <ListItem
                                  key={subItem.title}
                                  button
                                  component={Link}
                                  to={subItem.path}
                                  onClick={handleCloseSubMenu}
                                >
                                  <ListItemText sx={{"&:hover": {
                              color: "#6f9a37",
                            },}} primary={subItem.title} />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}
                      </Box>
                    );
                  } else {
                    return (
                      <Button
                        key={item.title}
                        component={Link}
                        to={item.path}
                        color="inherit"
                        onClick={() => handleChange(item.path)}
                        sx={{
                          textTransform: "none",
                          // "&:hover": { backgroundColor: "transparent" },
                          padding: "0 15px",
                          minWidth: "auto",
                          fontSize: "15px",
                          "&:hover": {
                              color: "#6f9a37",
                            },
                        }}
                      >
                        {item.title}
                      </Button>
                    );
                  }
                })}
              </Box>    
            </Toolbar>
          </Container>
        </AppBar>
    </Box>
  );
};

export default NavBar;
