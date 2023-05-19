import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';

export default function Commentaire({comment}) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
    return formattedDate // Outputs: 30 APR 2023
  }

  return (
    <Card sx={{ width: "100%"}} style={{margin:0,justifyContent:"center", marginBottom:"1rem" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {comment.student.username.slice(0,2)}
          </Avatar>
        }
     
        title={comment.student.username}
        subheader={formatDate(comment.updated_at)}
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.content}
        </Typography>
      </CardContent>
     
    </Card>
    
  );
}