// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import backgroundImage from "../assets/images/cgbg.jpg";
// import emailjs from "emailjs-com";

// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   TextField,
//   Button,
//   Alert,
//   Collapse,
// } from "@mui/material";

// const Contact = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   //media
//   const isNotMobile = useMediaQuery("(min-width: 1000px)");
//   // states
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//     emailjs
//       .sendForm(
//         "service_sf90p0c",
//         "template_huzm9wh",
//         e.target,
//         "_LJF21T8r0QuTN81U"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           toast.success("Message sent!");
//           setName("");
//           setEmail("");
//           setContactNumber("");
//           setMessage("");
//         },
//         (error) => {
//           console.log(error.text);
//           toast.error("Something went wrong. Please try again later.");
//         }
//       );


//   //contact form ctrl
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/v1/contact", {
//         name,
//         email,
//         contactNumber,
//         message,
//       });
//       toast.success("Message Sent Successfully");
//       setName("");
//       setEmail("");
//       setContactNumber("");
//       setMessage("");
//     } catch (err) {
//       console.log(error);
//       if (err.response.data.error) {
//         setError(err.response.data.error);
//       } else if (err.message) {
//         setError(err.message);
//       }
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };
//   return (
//     <div style={{
    
    
//    }}>
//     <Box
//       width={isNotMobile ? "40%" : "80%"}
//       p={"2rem"}
//       m={"2rem auto"}
//       borderRadius={5}
//       sx={{ boxShadow: 5 }}
//       backgroundColor={theme.palette.background.alt}
//     >
//       <Collapse in={error}>
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       </Collapse>
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h3" textAlign="center">
//           Contact Us
//         </Typography>

//         <TextField
//           label="Name"
//           name="Name"
//           required
//           margin="normal"
//           fullWidth
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <TextField
//           label="Email"
//           type="email"
//           name= "Email"
//           required
//           margin="normal"
//           fullWidth
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <TextField
//           label="Contact Number (optional)"
//           type="tel"
//           margin="normal"
//           name="Number"
//           fullWidth
//           value={contactNumber}
//           onChange={(e) => {
//             setContactNumber(e.target.value);
//           }}
//         />
//         <TextField
//           label="Message"
//           name= "Message"
//           multiline
//           rows={4}
//           required
//           margin="normal"
//           fullWidth
//           value={message}
//           onChange={(e) => {
//             setMessage(e.target.value);
//           }}
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{ color: "white", mt: 2 }}
//         >
//           Send Message
//         </Button>
//         <Typography mt={2}>
//           Need immediate assistance?{" "}
//           <Link to="mailto:prajwalshindeee@gmail.com">Email</Link>
//         </Typography>
//       </form>
//     </Box>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import backgroundImage from "../assets/images/cgbg.jpg";
import emailjs from "emailjs-com";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //contact form ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/contact", {
        name,
        email,
        contactNumber,
        message,
      });

      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent!");
            setName("");
            setEmail("");
            setContactNumber("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            toast.error("Something went wrong. Please try again later.");
          }
        );

      toast.success("Message Sent Successfully");
      setName("");
      setEmail("");
      setContactNumber("");
      setMessage("");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div style={{}}>
      <Box
        width={isNotMobile ? "40%" : "80%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={5}
        sx={{ boxShadow: 5 }}
        backgroundColor={theme.palette.background.alt}
      >
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3" textAlign="center">
            Contact Us
          </Typography>

          <TextField
          label="Name"
          name="Name"
          required
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Email"
          type="email"
          name= "Email"
          required
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Contact Number (optional)"
          type="tel"
          margin="normal"
          name="Number"
          fullWidth
          value={contactNumber}
          onChange={(e) => {
            setContactNumber(e.target.value);
          }}
        />
        <TextField
          label="Message"
          name= "Message"
          multiline
          rows={4}
          required
          margin="normal"
          fullWidth
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Send Message
        </Button>
        <Typography mt={2}>
          Need immediate assistance?{" "}
          <Link to="mailto:prajwalshindeee@gmail.com">Email</Link>
        </Typography>
      </form>
    </Box>
    </div>
  );
};

export default Contact;

