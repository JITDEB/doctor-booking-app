import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Banner = styled.div`
  background-image: url('https://rundoc.in/assets/images/banner.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px 20px;
  color: white;
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const BannerSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 15px;
  margin-right: 10px;
  width: 400px;
  border: none;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 15px 30px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Section = styled.section`
  margin: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const DoctorCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: left;
  border-radius: 5px;
`;

const ArticleCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: left;
  border-radius: 5px;
`;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', location: 'New York, NY' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology', location: 'Los Angeles, CA' },
    // Add more doctors as needed
  ];

  const handleSearch = () => {
    const results = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Container>
      <Banner>
        <BannerTitle>Find the Best Doctors Near You</BannerTitle>
        <BannerSubtitle>Book appointments with top-rated doctors in your area</BannerSubtitle>
        <SearchInput 
          type="text" 
          placeholder="Search by specialty, location, or name" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </Banner>
      
      <Section>
        <SectionTitle>Search Results</SectionTitle>
        {searchResults.length > 0 ? (
          searchResults.map((doctor, index) => (
            <DoctorCard key={index}>
              <h3>{doctor.name}</h3>
              <p>Specialty: {doctor.specialty}</p>
              <p>Location: {doctor.location}</p>
              <SearchButton>View Profile</SearchButton>
            </DoctorCard>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Section>
      
      <Section>
        <SectionTitle>Featured Doctors</SectionTitle>
        <DoctorCard>
          <h3>Dr. John Doe</h3>
          <p>Specialty: Cardiology</p>
          <p>Location: New York, NY</p>
          <SearchButton>View Profile</SearchButton>
        </DoctorCard>
        <DoctorCard>
          <h3>Dr. Jane Smith</h3>
          <p>Specialty: Dermatology</p>
          <p>Location: Los Angeles, CA</p>
          <SearchButton>View Profile</SearchButton>
        </DoctorCard>
      </Section>
      
      <Section>
        <SectionTitle>Health Tips and Articles</SectionTitle>
        <ArticleCard>
          <h3>Skin Care Routine for All Ages</h3>
          <p>Discover the best skin care routine for your age group...</p>
          <SearchButton>Read More</SearchButton>
        </ArticleCard>
      </Section>
      
      <Section>
        <h2>My Profile</h2>
        <Link to="/profile">
          <SearchButton>View Profile</SearchButton>
        </Link>
      </Section>
      
      <Link to="/book">
        <SearchButton>Book an Appointment</SearchButton>
      </Link>
    </Container>
  );
}

export default Home;