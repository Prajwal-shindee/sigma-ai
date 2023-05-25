import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Logo from "../assets/images/logo.png";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const logoStyle = {
    height: 60,
    verticalAlign: "middle",
    marginRight: 10,
  };

  const navLinkStyle = {
    fontSize: "1.2rem",
    padding: "1rem",
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Box display="flex" alignItems="center">
        <img src={Logo} alt="Sigma AI logo" style={logoStyle} />
        <Typography variant="h1" color="primary" fontWeight="bold">
          
        </Typography>
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={navLinkStyle}>
          Contact
        </NavLink>
        {loggedIn ? (
          <NavLink to="/login" onClick={handleLogout} style={navLinkStyle}>
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink to="/register" style={navLinkStyle}>
              Sign Up
            </NavLink>
            <NavLink to="/login" style={navLinkStyle}>
              Sign In
            </NavLink>
          </>
        )}
      </Box>
      <Box display={{ xs: "block", md: "none" }}>
        <IconButton onClick={handleMenuClick} color="primary">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/contact" style={navLinkStyle}>
              Contact
            </NavLink>
          </MenuItem>
          {loggedIn ? (
            <MenuItem
              onClick={() => {
                handleLogout();
                handleMenuClose();
              }}
            >
              <NavLink to="/" style={navLinkStyle}>
                Logout
              </NavLink>
            </MenuItem>
          ) : (
            <>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/register" style={navLinkStyle}>
                  Sign Up
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/login" style={navLinkStyle}>
                  Sign In
                </NavLink>
              </MenuItem>
            </>
          )}
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
