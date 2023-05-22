import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material'
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign: 'center', bgcolor: 'black', color:"white",p:2}}>
      <Box sx={{my:3, "& svg":{
        fontSize:"60px", cursor:'pointer', margin:1,
      },
      "& svg:hover":{
        transform:'translateX(5px)',
        transition: 'all 400ms'
      }
      }}>
        {/* icons */}
        <a href='https://www.facebook.com/'><span style={{color:"blue"}}><FacebookIcon/></span></a>
       <a href='https://www.youtube.com/'> <span style={{color:"red"}}><YouTubeIcon/></span></a>
        <a href='https://www.facebook.com/'><span style={{color:"skyblue"}}><TwitterIcon/></span></a>
        <a href='https://www.instagram.com/'><span style={{color:"red"}}><InstagramIcon/></span></a>
      </Box>
        <Typography variant='h6' sx={{"&media (max-width:600px)":{
        fontSize: '1rem'
        }}}>
            All Rights Reserved &copy; AUAY <br/>
            <h3>contact details</h3>
            <b>Mobile:</b> 9998887700<br/>
            <b>Email:</b> Ak_chilis@mail.com
        </Typography>
      </Box>
    </>
  )
}

export default Footer
