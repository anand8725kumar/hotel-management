import React, { useState } from "react";
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import "./Contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const post = () => {
    const { name, email, subject, message } = user;
    // Perform registration logic here
  };

  return (
    <>
      <Layout>
      <Box sx={{my: 7, textAlign: "center", p:0, "& h4": {
        fontWeight: "bold",
        my:2,
        fontSize:'2rem'
      },
      "& p": {
        textAlign: "justify",
      },
      "@media (max-width:600px)":{
        mt:0, "& h4 ": {
          fontSize: '1.5rem',
        },
      },
      }}
      >
        <Typography variant='h4'><center>Your feedback helps us grow. Feel free to write back to us</center></Typography>
      </Box>
      <center>
      <div className="register">
        {console.log("User", user)}
        <h1>Forms</h1>
        <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}></input> <br/>
        <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input><br/>
        <input type="text" name="subject" value={user.subject} placeholder="subject" onChange={handleChange}></input><br/>
        <input type="text" name="message" value={user.message} placeholder="message" onChange={handleChange} className="message"></input><br/>
        <div className="button" onClick={post}>Post</div><br/><br/>
      </div>
      </center>




      {/*<div>
        <Box sx={{my:10, ml:5, "& h4": {fontWeight: "bold", mb: 2} }}>
        
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLu7FAVaQO84AyRD5B7DC8Dx_571KMohWjcp6OWtiIJ_pbHQ/viewform?embedded=true" width="102%" height="823" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>       </Box>
      </div>*/}





      </Layout>
    </>
  );
};

export default Contact;



