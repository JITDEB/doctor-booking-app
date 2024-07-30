// src/pages/BookAppointment.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function BookAppointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${form.name} on ${form.date} at ${form.time}`);
  };

  return (
    <Container>
      <Title>Book an Appointment</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <Input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />
        <Button type="submit">Book Appointment</Button>
      </Form>
    </Container>
  );
}

export default BookAppointment;