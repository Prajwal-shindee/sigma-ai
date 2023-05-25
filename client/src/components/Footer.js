import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  const theme = useTheme();

  const footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: theme.palette.background.alt,
    
    p: "0.5rem",
    height: "1.5cm", // Set the height to 1 cm
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.1)",
    "@media (max-width: 600px)": { // Media query for small screens
      display: "none", 
    },
  };
  const logoStyle = {
    height: 50,
    verticalAlign: "middle",
    marginRight: 10,
  };

  const emailStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.5rem",
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    "& svg": {
      fontSize: "1.8rem",
      marginRight: "0.3rem",
    },
    "@media (max-width: 600px)": { // Media query for small screens
      marginTop: "1rem", // Increase top margin for better spacing
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box sx={footerStyle}>
      <Box display="flex" alignItems="center">
      <img src={Logo} alt="Sigma AI logo" style={logoStyle} />
        {/* <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          fontSize="2rem"
          sx={{ mr: "1rem" }} // Add margin to adjust spacing
        >
          Sigma-AI
        </Typography> */}
      </Box>

      <Typography
        variant="body1"
        color="textSecondary"
        mt="0.5rem"
        fontSize="1rem"
        sx={{ mr: "1rem" }} // Add margin to adjust spacing
      >
        &copy; {currentYear} Prajwal Shinde
      </Typography>
      <Box sx={emailStyle}>
        <a href="mailto:prajwalshindeee@gmail.com">
          <EmailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/prajwal-shindee/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: "0.5rem", display: "block" }} // Add margin and display to adjust spacing
        >
          <LinkedInIcon style={{ fontSize: "1.8rem" }} />
        </a>
        <a
          href="https://github.com/prajwal-shinde"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: "0.5rem", display: "block" }} // Add margin and display to adjust spacing
        >
          <GitHubIcon style={{ fontSize: "1.8rem" }} />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
