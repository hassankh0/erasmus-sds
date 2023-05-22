import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SchoolIcon from "@mui/icons-material/School";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
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
    title: "OLA",
    icon: <HandshakeIcon />,
    to: "OLA",
    hasChildren: false,
  },
  {
    title: "Contact",
    icon: <ContactSupportIcon />,
    to: "Contact",
    hasChildren: false,
  },
];
export const SIDEBAR_DATA_ADMIN = [
  {
    title: "Home",
    icon: <HomeIcon />,
    to: "home",
    hasChildren: false,
  },
  {
    title: "User",
    icon: <GroupIcon />,
    to: "TableStudents",
    hasChildren: false,
  },
  {
    title: "Courses",
    icon: <MenuBookIcon />,
    to: "TableCourses",
    hasChildren: false,
  },
  // {
  //   title: "University",
  //   icon: <SchoolIcon />,
  //   to:"AllUnis",
  //   hasChildren: false,

  // },
];
