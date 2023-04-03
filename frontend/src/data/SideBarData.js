import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
    hasChildren: false,
   
  },
  {
    title: "My Courses",
    icon: <ShoppingCartIcon />,
    hasChildren: false,
   
  },
  {
    title: "OLA",
    icon: <HandshakeIcon />,
    hasChildren: false,
  
  },

];