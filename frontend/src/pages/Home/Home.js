import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import { Button } from '@mui/material';
import './styles.css';

const homePageContent = (
  <div>
    {/* Navbar */}
    {/*}
    <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/AllCourses">Courses</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">Registration</Link></li>
      </ul>
    </nav>
    */}

    <section id="home">
      <h1>Welcome to Courses for Erasmus+ Students (CES)</h1>
      <p>At CES, we provide a comprehensive list of courses to help Erasmus+ students choose suitable courses for their learning agreement.</p>
      <p>Our web application offers official course descriptions, comments from other students, and the ability to add comments and materials to facilitate the learning agreement creation process.</p>
    </section>
    <br/>
    <section id="courses">
      <h2>Explore our Courses</h2>
      <p>Click the button below to browse our available courses and find the perfect fit for your learning agreement.</p>
      <Link to="/AllCourses" className="btn">Browse Courses</Link>
    </section>

    <section id="login">
      <h2>Login</h2>
      <p>If you already have an account, you can login here to access your profile and manage your courses.</p>
      <Link to="/login" className="btn">Login</Link>
    </section>

    <section id="registration">
      <h2>Registration</h2>
      <p>If you're a new user, you can register here to create an account and start exploring our courses.</p>
      <Link to="/registration" className="btn">Register</Link>
    </section>

    {/* Footer */}
    <footer>
    <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, please feel free to contact us at{' '}
        <a href="mailto:sds@ces.com">sds@ces.com</a>.
      </p>
    </footer>
  </div>
);

const Home = () => {
  return (
    <div>
      {<SideBar content={homePageContent}/>}
    </div>
  );
};

export default Home;
