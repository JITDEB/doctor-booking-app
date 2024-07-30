const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy data
const doctors = [
  { id: 1, name: 'Dr. Smith', experience: 10, slots: [{ id: 1, time: '9:00 AM' }, { id: 2, time: '10:00 AM' }] },
  { id: 2, name: 'Dr. Johnson', experience: 5, slots: [{ id: 3, time: '11:00 AM' }, { id: 4, time: '12:00 PM' }] },
];

// Get all doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

// Get a single doctor by ID
app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  res.json(doctor);
});

// Handle bookings
app.post('/api/bookings', (req, res) => {
  const { name, slot, email, phone } = req.body;

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Appointment Confirmation',
    text: `Your appointment with Doctor ID ${doctorId} is booked for slot ${slot}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });

  // Send SMS
  const client = twilio('AC236f04ef4c341e3ced26f96350d61918', '6de630c826626873573d7d776c166b1e');

  client.messages.create({
    body: `Your appointment with Doctor ID ${doctorId} is booked for slot ${slot}.`,
    from: '+19388395284',
    to: phone
  })
  .then(message => console.log(message.sid));

  res.json({ message: 'Booking confirmed and notifications sent' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});