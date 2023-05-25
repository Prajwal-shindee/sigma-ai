import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { styled } from "@mui/system";
import backgroundImage from "../assets/images/cgbg.jpg";

const StyledCard = styled(Card)({
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  height: "240px",
  width: "240px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.2s, background-color 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },

  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ textAlign: "center", marginTop: "50px" }}>
          <Typography variant="h2" mb={2} fontWeight="bold">
            Experience AI 
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Explore our tools below to create amazing content!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box p={2} sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              Text Generation
            </Typography>
            <StyledCard onClick={() => navigate("/summary")}>
              <DescriptionOutlinedIcon
                sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  sx={{ textAlign: "center" }}
                >
                  TEXT SUMMARY
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Summarize long text into short sentences
                </Typography>
              </Stack>
            </StyledCard>
          </Box>
          <Box p={2} sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              Paragraph Generation
            </Typography>
            <StyledCard onClick={() => navigate("/paragraph")}>
              <TextFieldsOutlinedIcon
                sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  sx={{ textAlign: "center" }}
                >
                  PARAGRAPH GENERATOR
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Generate paragraphs with random words
                </Typography>
              </Stack>
            </StyledCard>
          </Box>
          <Box p={2} sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              AI Chatbot
            </Typography>
            <StyledCard onClick={() => navigate("/chatbot")}>
              <ChatOutlinedIcon
                sx={{
                  fontSize: 80,
                  color: "primary.main",
                  mt: 2,
                  ml: 2,
                }}
              />
              <Stack p={3} pt={0}>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  sx={{ textAlign: "center" }}
                >
                  AI CHATBOT
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Chat with an AI assistant
                </Typography>
              </Stack>
            </StyledCard>
          </Box>
          <Box p={2} sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              JS Code Generation
            </Typography>
            <StyledCard onClick={() => navigate("/JsConverter")}>
              <CodeOutlinedIcon
                sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  sx={{ textAlign: "center" }}
                >
                  JS CODE GENERATOR
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Generate code for various languages
                </Typography>
              </Stack>
            </StyledCard>
          </Box>
          <Box p={2} sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={2} fontWeight="bold">
              Image Generation
            </Typography>
            <StyledCard onClick={() => navigate("/ScifiImage")}>
              <ImageSearchOutlinedIcon
                sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  sx={{ textAlign: "center" }}
                >
                  IMAGE GENERATOR
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Generate images with AI
                </Typography>
              </Stack>
            </StyledCard>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Homepage;
