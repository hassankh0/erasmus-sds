import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography, Grid, Paper } from '@mui/material';
import CartItem from './CartItem';
import LearningAgreement from './PDFPages/PDFPages';
import * as coursServices from '../services/coursServices';
import * as olaServices from '../services/olaServices';

const ShopingCart = () => {
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);
  const [olaId, setOlaId] = useState(0);
  const [sendingInstitution, setSendingInstitution] = useState({
    name: '',
    responsibleName: '',
    contactEmail: '',
    department: '',
  });
  const [receivingInstitution, setReceivingInstitution] = useState({
    name: '',
    responsibleName: '',
    contactEmail: '',
    department: '',
  });

  const handleSendingInstitutionChange = (field, value) => {
    setSendingInstitution((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleReceivingInstitutionChange = (field, value) => {
    setReceivingInstitution((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchCourses = async () => {
    const data = await coursServices.getCoursesOfStudent();
    setCourses(data);
    let t = 0;
    data.map((d) => (t += d.credits));
    setTotal(t);
  };

  const save = async () => {
    await olaServices.CreateOla(courses, sendingInstitution, receivingInstitution).then(() => {
      setSendingInstitution({
        name: '',
        responsibleName: '',
        contactEmail: '',
        department: '',
      });
      setReceivingInstitution({
        name: '',
        responsibleName: '',
        contactEmail: '',
        department: '',
      });
      setCourses([]);
      setTotal(0);
    });

  }

  useEffect(() => {
    fetchCourses();
    console.log(courses);
  }, []);

  const handleLoadComponent = () => {
    // Load the component or perform the desired action
    console.log('Component loaded!');
  };

  const isFormEmpty =
    !sendingInstitution.name ||
    !sendingInstitution.responsibleName ||
    !sendingInstitution.contactEmail ||
    !sendingInstitution.department ||
    !receivingInstitution.name ||
    !receivingInstitution.responsibleName ||
    !receivingInstitution.contactEmail ||
    !receivingInstitution.department;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Courses</h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {courses.map((cours) => (
                <CartItem key={Math.random()} cours={cours} fetchCourses={fetchCourses} />
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{total} ECTS</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Paper elevation={3} className=' p-2 m-2'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Sending Institution</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Institution Name"
                value={sendingInstitution.name}
                onChange={(e) => handleSendingInstitutionChange('name', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Responsible Name"
                value={sendingInstitution.responsibleName}
                onChange={(e) => handleSendingInstitutionChange('responsibleName', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contact Email"
                value={sendingInstitution.contactEmail}
                onChange={(e) => handleSendingInstitutionChange('contactEmail', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Department/Faculty"
                value={sendingInstitution.department}
                onChange={(e) => handleSendingInstitutionChange('department', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Receiving Institution</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Institution Name"
                value={receivingInstitution.name}
                onChange={(e) => handleReceivingInstitutionChange('name', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Responsible Name"
                value={receivingInstitution.responsibleName}
                onChange={(e) => handleReceivingInstitutionChange('responsibleName', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Contact Email"
                value={receivingInstitution.contactEmail}
                onChange={(e) => handleReceivingInstitutionChange('contactEmail', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Department/Faculty"
                value={receivingInstitution.department}
                onChange={(e) => handleReceivingInstitutionChange('department', e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>

        {(courses.length > 0 && !isFormEmpty) && (

          <Button onClick={save}>
            Save
          </Button>
        )}
      </div>
    </section>
  );
};

export default ShopingCart;
