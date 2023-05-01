import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import SpeedIcon from '@mui/icons-material/Speed';
import BookIcon from '@mui/icons-material/Book';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, Box } from '@mui/material';
import LvlLinear from './LvlLinear';
import Commentaire from './Commentaire';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCourse } from '../services/coursServices';
import CommentForm from './CommentForm';
import { checkLogin } from '../utils/checkLogin';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CoursDetail() {
  const { coursId } = useParams('coursId');
  const [expanded, setExpanded] = useState(false);
  const [cours, setCourse] = useState();
  const [comments, setComments] = useState([]);


  useEffect(() => {
    getCourse(coursId).then(data => {
      setCourse(data);
      setComments(data.comments);
    }
    );

  }, []);

  if (!cours) {
    return <div>Loading...</div>;
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "70%",
          height: "100%",
        },
        margin: 0,
        justifyContent: "center"
      }}
    >
      <Paper elevation={3} sx={{ p: 2 }}>
        <Card sx={{ width: "100%" }} style={{ margin: 0, justifyContent: "center" }} >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {cours.name.slice(0, 2)}
              </Avatar>
            }

            title={cours.name}
            subheader={cours.code}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={2} sx={{ width: '40%', margin: '0 10px', textAlign: "center" }}>
              <IconButton aria-label="add to favorites">
                <BookIcon color='primary' />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {cours.credits} ECTS
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ width: '40%', margin: '0 10px', alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h6" color="text.secondary" style={{ textAlign: "center" }}>
                Difficulty
              </Typography>
              <br />
              <LvlLinear difficulty={cours.difficulty ? cours.difficulty : 50} />
              <br />
            </Paper>
          </Box>
          <CardContent>
            <Typography variant='h5' color="black">
              About This Course
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cours.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>General Info:</Typography>
              {/* <Typography paragraph>
                Prerequisites : C# , Visual Studio , Docker
              </Typography> */}
              <Typography paragraph>
                ECTS : {cours.credits}
              </Typography>
              <Typography paragraph>
                TEACHER : {cours.instructor}
              </Typography>
              {/* <Typography paragraph>
                Contact : teacher@put.poznan.com
              </Typography> */}
            </CardContent>
          </Collapse>
        </Card>
      </Paper>

      {checkLogin() ?
        <Paper elevation={3} sx={{ p: 2 }}>
          <CommentForm />
        </Paper>
        :
        <></>}

      <Paper elevation={3} sx={{ p: 2 }}>
        {comments.map(comment => (
          <Commentaire comment={comment} />
        ))}

      </Paper>
    </Box>

  );
}