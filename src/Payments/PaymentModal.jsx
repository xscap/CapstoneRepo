import React from "react";
import "./paymentmodal.css";

const PaymentModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Make a Payment</h2>
        <form className="payment-form">
          <label>Customer Name</label>
          <input type="text" placeholder="Enter customer name" required />

          <label>Payment Method</label>
          <select required>
            <option value="">Select method</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
            <option>Net Banking</option>
          </select>

          <label>Amount</label>
          <input type="number" placeholder="Enter amount" min="1" required />

          <button type="submit" className="submit-btn">Pay Now</button>
          <button type="button" className="close-btn" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
