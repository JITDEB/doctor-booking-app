import React from 'react';

function DoctorDetails({ doctor, slots }) {
  return (
    <div>
      <h2>{doctor.name}</h2>
      <p>{doctor.experience} years of experience</p>
      <h3>Available Slots</h3>
      <ul>
        {slots.map(slot => (
          <li key={slot.id}>{slot.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDetails;