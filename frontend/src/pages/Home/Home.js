import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';
import { checkLogin } from '../../utils/checkLogin';

 const loggedoutdata = [
  {
    "title":"Explore our Courses",
    "text":"Click the button below to browse our available courses and find the perfect fit for your learning agreement.",
    "Btn":"Browse Courses",
  },
  {
    "title":"Login",
    "text":"If you already have an account, you can login here to access your profile and manage your courses.",
    "Btn":"Login",
    "link":"/Login"
  },
  {
    "title":"Registration",
    "text":"If you're a new user, you can register here to create an account and start exploring our courses.",
    "Btn":"Register",
    "link":"/Register"
  },
  {
    "title":"Contact Us",
    "text":"If you have any questions or feedback, please feel free to contact us at sds@put.pl",
    "Btn":"Contact US",
  },
 ]

const loggedindata = [
  {
    "title": "Explore our Courses",
    "text": "Click the button below to browse our available courses and find the perfect fit for your learning agreement.",
    "Btn": "Browse Courses",
  },
  {
    "title": "Contact Us",
    "text": "If you have any questions or feedback, please feel free to contact us at sds@put.pl",
    "Btn": "Contact US",
  },
]

 const Home = () => {

   const [data, setData] = useState(loggedoutdata);

   useEffect(() => { setData(checkLogin() ? loggedindata : loggedoutdata)},[])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {data.map((cardData, index) => (
        <Box key={index} sx={{ margin: '16px' }}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {cardData.title}
              </Typography>
              <Typography variant="body2">
                {cardData.text}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={cardData.link}>{cardData.Btn}</Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
export default Home;
