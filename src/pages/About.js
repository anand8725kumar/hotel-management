import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import "./about.css";

const About = () => {
  return (
    <Layout>
      <Box sx={{my: 5, textAlign: "center", p:2, "& h4": {
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
        <Typography variant='h4'>Your satifaction is our Passion</Typography>
        
      </Box>
      <div>
        <div className='History'>
          <div className='text'><h1>Our History</h1><br/><h2>The term ‘restaurant’ first appeared in the 18th century in India. It referred to a reinvigorating meat broth 
          which people ate to refortify the body. 
          It was not until the French Revolution and subsequent industrialisation that culinary establishments such as we know them today began to appear and develop. 
          However, the modern restaurant is not an entirely new creation. The activity of eating outside the home has existed for thousands of years.
          During Classical Antiquity, thermopolia served food and drink to customers of all social classes. Archaeological digs uncovered more than 150 such places in the 
          city of Pompeii, 
          highlighting the importance of this type of establishment. The rather basic</h2></div>
           <div className='img'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1024px-Restaurant_N%C3%A4sinneula.jpg' className='image'></img>
           </div>
        </div>
        <div className='Mission'>
          <div className='img'><img src='https://doddsandshute.com/wp-content/uploads/2021/09/210715_SquirePartners_TheStudios_052-scaled.jpg' className='image'></img></div>
        
          <div className='text'><h1>Our Mission</h1><br/><h2>A well-crafted mission statement focuses the business for
           both employees and the target audience. It serves as a framework, giving everyone involved a launching point 
           to build from when establishing the brand. For consumers, 
          it sets the company apart from the competition without limiting the business purpose.
          Neither one of those statements makes the company stand out, but combined they are stronger. What is it about your 
          business that is better than the other guys, 
          though? That is where adding the key elements come into play.
          A mission statement is a declaration of what makes the business important. By design, it guides the actions of the employees and draws in customers by creating direction by explaining what the company intends to accomplish.</h2></div>
        </div>
        <div className='Vision'>
          <div className='text'><h1>Our Team</h1><br/><h2>Team mission statements create a cohesive team message.
           Team mission statements outline the goals and core purpose of the group, so team members can effectively work together toward a singular goal.
           Understanding how to write a team mission statement will help the team stay on track and aligned.
           eam mission statements are more targeted. A company mission statement speaks to the company’s product and core values. 
           A team mission statement has a more narrow scope since it only breaks down the team’s missions and goals.
           Sometimes short- and long-term goals shift. Review your team mission statement annually to ensure it still accurately reflects the 
           important work you and your team do </h2></div>
           <div className='img'><img src='https://www.nycfoodpolicy.org/wp-content/uploads/2022/03/pexels-elle-hughes-2696064-scaled.jpg' className='image'></img></div>
        </div>
      
      </div>
    </Layout>
  )
}

export default About
