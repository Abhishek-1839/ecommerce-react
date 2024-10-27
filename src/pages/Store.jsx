import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './store.css';

const Store = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const stores = {
    Mumbai: { coordinates: [19.076, 72.8777], locations: ["Store 1 - Mumbai", "Store 2 - Mumbai", "Store 3 - Mumbai"] },
    Gurugram: { coordinates: [28.4595, 77.0266], locations: ["Store 1 - Gurugram", "Store 2 - Gurugram"] },
    Delhi: { coordinates: [28.7041, 77.1025], locations: ["Store 1 - Delhi", "Store 2 - Delhi", "Store 3 - Delhi", "Store 4 - Delhi"] },
    Bangalore: { coordinates: [12.9716, 77.5946], locations: ["Store 1 - Bangalore", "Store 2 - Bangalore"] },
    Pune: { coordinates: [18.5204, 73.8567], locations: ["Store 1 - Pune", "Store 2 - Pune", "Store 3 - Pune"] },
  };

  return (
    <div className="store-locator-container">
      <div className="city-list">
        {Object.keys(stores).map(city => (
          <div
            key={city}
            className={`city-item ${selectedCity === city ? 'active' : ''}`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </div>
        ))}
      </div>
      <div className="store-list">
        {selectedCity ? (
          <div>
            <h2>Stores in {selectedCity}</h2>
            <ul>
              {stores[selectedCity].locations.map(store => (
                <li key={store}>{store}</li>
              ))}
            </ul>
            <MapContainer 
              center={stores[selectedCity].coordinates} 
              zoom={13} 
              style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={stores[selectedCity].coordinates}>
                <Popup>{selectedCity}</Popup>
              </Marker>
            </MapContainer>
          </div>
        ) : (
          <p>Select a city to see the stores.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
