import React from "react";
import './AddressManagement.css'

const AddressManagement = ({ addresses = [], onDelete, onUpdate }) => {
  return (
    <div>
      <h3>Saved Addresses</h3>
      {addresses.length === 0 ? (
        <p>No saved addresses found.</p>
      ) : (
        <ul>
          {addresses.map((address, index) => (
            <li key={index}>
              <p>
                <strong>{address.type}:</strong> {address.details}
              </p>
              <button onClick={() => onUpdate(index, { details: "Updated Details" })}>
                Update
              </button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressManagement;
