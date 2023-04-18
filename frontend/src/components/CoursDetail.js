import * as React from 'react';
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
import { Paper,Box } from '@mui/material';
import LvlLinear from './LvlLinear';
import Commentaire from './Commentaire';
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
  const [expanded, setExpanded] = React.useState(false);

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
      margin:0,
      justifyContent:"center"
    }}
  >
    <Paper elevation={3} sx={{ p: 2 }}>
    <Card sx={{ width: "100%"}} style={{margin:0,justifyContent:"center" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            L
          </Avatar>
        }
       
        title="NAME OF THE COURSE"
        subheader="Name of instructor"
      />
     <Box sx={{ display: 'flex' ,justifyContent: 'center'  }}>
       <Paper elevation={2} sx={{ width: '40%', margin: '0 10px' ,textAlign :"center"}}>
          <IconButton aria-label="add to favorites">
            <BookIcon color='primary' />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            6 ECTS
          </Typography>
        </Paper>
        <Paper elevation={2}  sx={{ width: '40%', margin: '0 10px' ,alignItems:"center" , justifyContent:"center"}}>
          <Typography variant="h6" color="text.secondary" style={{textAlign:"center"}}>
          Difficulty
           </Typography>
           <br/>
           <LvlLinear/>
           <br/>
        </Paper>
      </Box>
      <CardContent>
        <Typography variant='h5' color="black">
            About This Course 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
         scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
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
          <Typography paragraph>
          Prerequisites : C# , Visual Studio , Docker
          </Typography>
          <Typography paragraph>
           ECTS : 6
          </Typography>
          <Typography paragraph>
           TEACHER : Name of teacher
          </Typography>
          <Typography paragraph>
           Contact : teacher@put.poznan.com
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Paper>
    <Paper elevation={3} sx={{ p: 2 }}>
<Commentaire></Commentaire>
<Commentaire></Commentaire>
<Commentaire></Commentaire>
<Commentaire></Commentaire>

</Paper>
    </Box>
    
  );
}