import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingForm from '../components/BookingForm';
import DoctorDetails from '../components/DoctorDetails';

const DoctorPage = ({ doctorId }) => {
  const [doctor, setDoctor] = useState(null);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/doctors/${doctorId}`)
      .then(response => {
        setDoctor(response.data);
        setSlots(response.data.slots); // Assuming slots are part of doctor data
      })
      .catch(error => console.error('Error fetching doctor data:', error));
  }, [doctorId]);

  return (
    <div>
      {doctor ? (
        <>
          <DoctorDetails doctor={doctor} slots={slots} />
          <BookingForm doctorId={doctorId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DoctorPage;