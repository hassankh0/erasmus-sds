import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ReportIcon from "@mui/icons-material/Report";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
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
    to: "/admin/TableStudents",
    hasChildren: false,
  },
  {
    title: "Courses",
    icon: <MenuBookIcon />,
    to: "/admin/TableCourses",
    hasChildren: false,
  },
  {
    title: "Reports",
    icon: <ReportIcon />,
    to: "/admin/Reports",
    hasChildren: false,
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveIcon />,
    to: "/admin/Notifications",
    hasChildren: false,
  },
  // {
  //   title: "University",
  //   icon: <SchoolIcon />,
  //   to:"AllUnis",
  //   hasChildren: false,

  // },
];
