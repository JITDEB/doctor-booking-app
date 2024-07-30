import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingForm({ doctorId }) {
  const [name, setName] = useState('');
  const [slot, setSlot] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/doctors/${doctorId}`)
      .then(response => {
        setSlots(response.data.slots);
      })
      .catch(error => console.error('Error fetching slots:', error));
  }, [doctorId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/bookings', {
      doctorId,
      name,
      slot,
      email,
      phone
    })
    .then(response => {
      // Handle successful booking
      alert('Booking successful!');
    })
    .catch(error => console.error('Error making booking:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Slot:
        <select value={slot} onChange={e => setSlot(e.target.value)} required>
          <option value="" disabled>Select a slot</option>
          {slots.map(slot => (
            <option key={slot.id} value={slot.time}>{slot.time}</option>
          ))}
        </select>
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
      </label>
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookingForm;