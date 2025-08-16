import React from "react";
import NavLayout from "../NavLayout"; 
import Payments from "../../Payments/Payments"; // adjust path based on your folder structure

const PaymentViewer = () => {
  return (
    <NavLayout>
      <Payments />
    </NavLayout>
  );
};

export default PaymentViewer;