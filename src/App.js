import React, { useState } from "react";
import LocationModal from "./components/LocationModal"; // Modal for location options
import MapComponent from "./components/MapComponent"; // Map for manual location selection
import AddressForm from "./components/AddressForm"; // Form for additional address details
import AddressManagement from "./components/AddressManagement"; // Page to manage saved addresses

import './App.css'

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 12.971598, // Default latitude (e.g., Bangalore)
    lng: 77.594566, // Default longitude
  });
  const [addressDetails, setAddressDetails] = useState({}); // For address form
  const [showModal, setShowModal] = useState(true); // Show/hide location modal
  const [savedAddresses, setSavedAddresses] = useState([]); // List of saved addresses
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Handle location updates from MapComponent
  const handleLocationChange = (newLocation) => {
    console.log("New location selected:", newLocation);
    setSelectedLocation(newLocation);
  };

  // Handle form submission to save address
  const handleSaveAddress = (details) => {
    const newAddress = {
      ...details,
      location: selectedLocation,
    };
    setSavedAddresses((prev) => [...prev, newAddress]);
    console.log("Address saved:", newAddress);
  };

  // Handle delete and update in AddressManagement
  const handleDeleteAddress = (index) => {
    setSavedAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateAddress = (index, updatedDetails) => {
    setSavedAddresses((prev) =>
      prev.map((addr, i) => (i === index ? { ...addr, ...updatedDetails } : addr))
    );
  };

  return (
    <div>
      {/* Location Modal */}
      {showModal && (
        <LocationModal
          onEnableLocation={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                handleLocationChange({ lat: latitude, lng: longitude });
                setShowModal(false);
              },
              (error) => console.error("Geolocation error:", error)
            );
          }}
          onSearchManually={() => setShowModal(false)}
        />
      )}

      {/* Map Component */}
      {!showModal && (
        <div>
          <h1>Select Your Delivery Location</h1>
          <MapComponent
            location={selectedLocation}
            onLocationChange={handleLocationChange}
          />
          <p>
            <strong>Selected Location:</strong> {selectedLocation.lat}, {selectedLocation.lng}
          </p>
        </div>
      )}

      {/* Address Form */}
      <div>
        <h2>Enter Address Details</h2>
        <AddressForm onSave={handleSaveAddress} />
      </div>

      {/* Address Management */}
      <div>
        <h2>Manage Saved Addresses</h2>
        <AddressManagement
          addresses={savedAddresses} // Pass the state here
          onDelete={handleDeleteAddress}
          onUpdate={handleUpdateAddress}
        />
      </div>
    </div>
  );
};

export default App;
