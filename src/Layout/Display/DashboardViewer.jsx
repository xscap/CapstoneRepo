import React from "react";
import NavLayout from "../NavLayout"; 
import DashboardCntnt from "../../Dashboard/Home/DashboardCntnt";// adjust path based on your folder structure

const DashboardViewer = () => {
  return (
    <NavLayout>
      <DashboardCntnt />
    </NavLayout>
  );
};

export default DashboardViewer;