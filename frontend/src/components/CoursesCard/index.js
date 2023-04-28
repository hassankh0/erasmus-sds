import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./index.css";
import {useNavigate, Link} from "react-router-dom";

export default function ImgMediaCard({ course }) {
const navigate = useNavigate();

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
        <Typography variant="" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className='showbtn'>
          <Button size="small" component={Link} to={`/Cours-Details/${course.id}`} >DETAILS</Button>

        </div>

      </CardActions>
    </Card>
  );
}
