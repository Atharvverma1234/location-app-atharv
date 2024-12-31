import React, { useState } from "react";
import './AddressForm.css'

const AddressForm = ({ selectedAddress, onSave }) => {
  const [details, setDetails] = useState({
    houseNo: "",
    area: "",
    category: "Home",
  });

  const handleSave = () => {
    const address = { ...selectedAddress, ...details, id: Date.now() };
    onSave(address);
  };

  return (
    <div className="form-container">
      <h3>Enter Address Details</h3>
      <input
        type="text"
        placeholder="House/Flat/Block No."
        value={details.houseNo}
        onChange={(e) => setDetails({ ...details, houseNo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Apartment/Road/Area"
        value={details.area}
        onChange={(e) => setDetails({ ...details, area: e.target.value })}
      />
      <select
        value={details.category}
        onChange={(e) => setDetails({ ...details, category: e.target.value })}
      >
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends & Family">Friends & Family</option>
      </select>
      <button onClick={handleSave}>Save Address</button>
    </div>
  );
};

export default AddressForm;