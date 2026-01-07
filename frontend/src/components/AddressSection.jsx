// components/AddressSection.jsx
import React from "react";

export default function AddressSection({ address, lat, lng }) {
  return (
    <div className="info-card">
      <h3>Address</h3>
      <p>{address || "Not provided"}</p>
      {lat && lng && (
        <p>Coordinates: {lat}, {lng}</p>
      )}
    </div>
  );
}
