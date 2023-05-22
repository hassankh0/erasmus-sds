import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import { addCoursesToStudent } from '../../services/coursServices';
import {checkLogin} from '../../utils/checkLogin';


export default function ImgMediaCard({ course }) {
  const navigate = useNavigate();

  //Notification
  const [showNotification, setShowNotification] = useState(false);

  //Comportement
          
  //Notification effect
  useEffect(() => {
      if (showNotification) {
        const timer = setTimeout(() => {
          setShowNotification(false);
        }, 2000);
            
        return () => {
          clearTimeout(timer);
        };
      }
    }, [showNotification]);
      
  const handleAdd = () => {
    addCoursesToStudent(course.id);
    setShowNotification(true);
  }

  return (
    <Card sx={{ maxWidth: 300 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/course.png"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {course.name}
        </Typography>
        <Typography gutterBottom variant="p" component="p">
          {course.code}
        </Typography>
        <div className='paragraph'>
        <Typography variant="body2" color="text.secondary">
          {course.description.split()}
        </Typography>
        </div>
      </CardContent>

      <CardActions>
        <div className='showbtn'>
          <Button size="small" component={Link} to={`/Cours-Details/${course.id}`} >DETAILS</Button>
          {checkLogin() ? <Button size="small" onClick={handleAdd}  >Add</Button>:<></>}

          <div >
            {showNotification && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white w-64 p-4 rounded shadow border-4  border-gray-100">
                            <h2 className="text-lg text-blue-500 mb-4 text-center">The course has been added to the cart</h2>
                        </div>
                    </div>
                )}
            </div>

        </div>

      </CardActions>
      
    </Card>
    
  );
}
