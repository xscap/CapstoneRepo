import React from "react";
import NavLayout from "../NavLayout"; 
import Invoices from "../../Invoices/Invoices"; // adjust path based on your folder structure

const InvoiceViewer = () => {
  return (
    <NavLayout>
      <Invoices />
    </NavLayout>
  );
};

export default InvoiceViewer;