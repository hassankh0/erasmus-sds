import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import HandshakeIcon from '@mui/icons-material/Handshake';
export const SIDEBAR_DATA = [
  {
    title: "Home",
    icon: <HomeIcon />,
    to: "home",
    hasChildren: false,
  },
  {
    title: "All Courses",
    icon: <MenuBookIcon />,
    to: "AllCourses",
    hasChildren: false,
   
  },
  {
    title: "My Courses",
    icon: <BookIcon />,
    to:"shopingCart",
    hasChildren: false,
   
  },
  {
    title: "OLA",
    icon: <HandshakeIcon />,
    to:"OLA",
    hasChildren: false,
  
  },

];