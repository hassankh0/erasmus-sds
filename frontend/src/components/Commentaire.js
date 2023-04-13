import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';

export default function Commentaire() {

  return (
    <Card sx={{ width: "100%"}} style={{margin:0,justifyContent:"center", marginBottom:"1rem" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            MY
          </Avatar>
        }
     
        title="Mostapha Youssef"
        subheader="10 JUN 2023"
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Good course for the erasmus student!
        </Typography>
      </CardContent>
     
    </Card>
    
  );
}