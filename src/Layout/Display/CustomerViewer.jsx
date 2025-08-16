import React from "react";
import NavLayout from "../NavLayout"; 
import Customers from "../../Customers/Customers"; // adjust path based on your folder structure

const CustomerViewer = () => {
  return (
    <NavLayout>
      <Customers />
    </NavLayout>
  );
};

export default CustomerViewer;