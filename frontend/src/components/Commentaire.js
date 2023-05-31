import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';

import { deleteComment } from '../services/coursServices';

export default function Commentaire({ commentKey, course, comment, onDelete }) {
  
  const [sessionData, setSessionData] = useState(null);
  useEffect(() => {
    const sessionDataString = sessionStorage.getItem('student');
    if (sessionDataString) {
      const sD = JSON.parse(sessionDataString);
      setSessionData(sD);
    }
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
    return formattedDate; // Outputs: 30 APR 2023
  };

  const handleDelete = async () => {
    try {
      console.log('Session id:', sessionData.id);
      console.log('Id du compte du commentaire supprimé: ' + comment.student_id);
  
      if (sessionData.id === comment.student_id) {
        await deleteComment(course, comment.id);
        onDelete(comment.id);
      } else {
        console.log('Session id does not match comment student id. Delete operation skipped.');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };
  

  return (
    <Card sx={{ width: '100%' }} style={{ margin: 0, justifyContent: 'center', marginBottom: '1rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {comment.student.username.slice(0, 2)}
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
      <Button variant="outlined" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  );
}
