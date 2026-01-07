// components/UPIPaymentButton.jsx
import React from "react";

export default function UPIPaymentButton({ upiId }) {
  return (
    <div className="info-card">
      <h3>UPI Payment</h3>
      {upiId ? (
        <button onClick={() => alert(`Pay to UPI: ${upiId}`)}>
          Pay Now
        </button>
      ) : (
        <span>No UPI ID provided</span>
      )}
    </div>
  );
}
