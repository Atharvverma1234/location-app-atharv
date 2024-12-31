import React, { useState } from "react";
import MapComponent from "./MapComponent";
import './LocationModal.css'

const LocationModal = ({ setSelectedAddress }) => {
  const [showMap, setShowMap] = useState(false);

  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedAddress({ latitude, longitude });
          setShowMap(true);
        },
        (error) => {
          alert("Error fetching location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSearchManually = () => {
    setShowMap(true);
  };

  return (
    <div className="modal-container">
      <h2>Select Your Location</h2>
      <button onClick={handleEnableLocation}>Enable Location</button>
      <button onClick={handleSearchManually}>Search Manually</button>
      {showMap && <MapComponent setSelectedAddress={setSelectedAddress} />}
    </div>
  );
};

export default LocationModal;