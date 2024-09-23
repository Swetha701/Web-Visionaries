import React, { useState } from 'react';

const alumniData = [
  { id: 1, name: 'Sai', year: 2020, profession: 'Software Engineer', location: 'New York' },
  { id: 2, name: 'Tara', year: 2018, profession: 'Data Scientist', location: 'San Francisco' },
  { id: 3, name: 'Vijay', year: 2021, profession: 'Product Manager', location: 'Austin' },
  // Add more alumni data here
];

const AlumniSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchTerm(search);
    const filtered = alumniData.filter(alumni => 
      alumni.name.toLowerCase().includes(search) ||
      alumni.profession.toLowerCase().includes(search) ||
      alumni.location.toLowerCase().includes(search) ||
      alumni.year.toString().includes(search)
    );
    setFilteredAlumni(filtered);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search Alumni</h2>
      <input 
        type="text"
        placeholder="Search by name, profession, year, or location"
        value={searchTerm}
        onChange={handleSearch}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map(alumni => (
            <li key={alumni.id} style={styles.listItem}>
              <h3 style={styles.name}>{alumni.name}</h3>
              <p>Year: {alumni.year}</p>
              <p>Profession: {alumni.profession}</p>
              <p>Location: {alumni.location}</p>
            </li>
          ))
        ) : (
          <li>No alumni found</li>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    overflowY: 'auto',
    backgroundImage: `url("https://img.freepik.com/premium-vector/autumn-falling-leaves-background_29865-1526.jpg?w=1060")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover', // Ensures the background covers the entire page
    height: '100vh', // Ensures the page takes full height
    backgroundColor: 'transparent',
  },
  heading: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '80%',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  name: {
    fontSize: '18px',
  },
};

export default AlumniSearch;
