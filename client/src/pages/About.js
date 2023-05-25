import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
} from "@mui/material";
import prajwalImg from "../assets/images/prajwal.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";
import { keyframes } from "@mui/styled-engine";
import backgroundImage from '../assets/images/cgbg.jpg';

// Define a keyframe animation for the text
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define a styled component for the text
const AnimatedText = styled(Typography)`
  animation: ${fadeIn} 0.5s ease-out;
`;

const About = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      width={isNotMobile ? "60%" : "100%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 ,  backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',}}
      backgroundColor={theme.palette.background.alt}
      textAlign="center"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={prajwalImg}
            alt="Prajwal Shinde"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <AnimatedText variant="h3" mb={2}>
              About
            </AnimatedText>
            <AnimatedText
              variant="body1"
              sx={{ flexGrow: 1, maxWidth: "80%", marginBottom: "2rem" }}
            >
              Hi there! I'm <b>Prajwal Shinde</b>, the creator of this website.
              I'm a software engineer based in India and I love building things
              with code. In my free time, I enjoy playing video games and
              learning new skills.
            </AnimatedText>

            <AnimatedText variant="body1" sx={{ marginBottom: "2rem" }}>
              The MERN stack website utilizes OpenAI API to provide users with
              five powerful tools. With the text generation tool, users can
              generate automated text based on input prompts. The paragraph
              generation tool allows users to generate entire paragraphs with
              just a few clicks. The AI chatbot offers an intelligent and
              personalized conversation experience. With the JS code generation
              tool, users can easily generate JavaScript code snippets. Finally,
              the image generation tool enables users to create custom images
              based on their input specifications. Overall, this website offers
              a unique and comprehensive suite of tools powered by the latest AI
              technology.
            </AnimatedText>
            <Box display="flex" justifyContent="center" mt={2}>
              <IconButton
                href="https://www.linkedin.com/in/prajwal-shindee/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 1 }}
              >
                <LinkedInIcon sx={{ fontSize: isNotMobile ? 40 : 30 }} />
              </IconButton>
              <IconButton
                href="https://github.com/prajwal-shinde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: isNotMobile ? 40 : 30 }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
