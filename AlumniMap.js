import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Import necessary Leaflet CSS
import L from 'leaflet';

// Fix marker icon issues in React-Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41], // Correct anchor for the default icon
});

L.Marker.prototype.options.icon = DefaultIcon;

const AlumniMap = () => {
  const alumniLocations = [
    { id: 1, name: 'Sai', position: [37.7749, -122.4194], location: 'San Francisco, USA' },
    { id: 2, name: 'Tara', position: [51.5074, -0.1278], location: 'London, UK' },
    { id: 3, name: 'Vijay', position: [-34.6037, -58.3816], location: 'Buenos Aires, Argentina' },
    
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Alumni Map</h2>
      <div style={styles.map}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {alumniLocations.map(alumni => (
            <Marker key={alumni.id} position={alumni.position}>
              <Popup>
                <b>{alumni.name}</b><br />{alumni.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    height: '100vh',
    backgroundImage: `url("https://img.freepik.com/premium-vector/autumn-falling-leaves-background_29865-1526.jpg?w=1060")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  map: {
    height: '80vh',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default AlumniMap;
