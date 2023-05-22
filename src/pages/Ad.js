
import Layout from '../components/Layout/Layout';
import { Box} from '@mui/material';
import "./Contact.css";

const Ad = () => {
  return (
    <Layout>
    <h1>We are here!</h1>

    
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
      <div><h1>We are here!</h1><br/></div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477016.3527177698!2d81.3762499971625!3d20.924777874572364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f5b5d8ef052b5%3A0x77ae800a7d1a0ce8!2sA%20R%20fast%20food!5e0!3m2!1sen!2sin!4v1684573321260!5m2!1sen!2sin" 
        width="600" height="450"
        ></iframe>
      </div>
      </Box>
    </Layout>
  )
}

export default Ad;



