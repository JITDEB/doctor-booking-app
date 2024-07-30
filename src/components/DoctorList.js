import React from 'react';
import { Link } from 'react-router-dom';

function DoctorList({ doctors }) {
  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.id}>
          <Link to={`/doctor/${doctor.id}`}>
            {doctor.name} - {doctor.experience} years of experience
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DoctorList;