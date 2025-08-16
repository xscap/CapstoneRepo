import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeMessage from "./Authentication/Welcome/WelcomeMessage";
import LoginPage from "./Authentication/Login/LoginPage";
import RegisterPage from "./Authentication/Register/RegisterPage";
import Report from "./Reports/Report";
import Invoices from "./Invoices/Invoices";
import Customers from "./Customers/Customers"
import NavLayout from "./Layout/NavLayout";
import InvoiceViewer from "./Layout/Display/InvoiceViewer";
import Payments from "./Payments/Payments";
import DashboardCntnt from "./Dashboard/Home/DashboardCntnt";
import DashboardViewer from "./Layout/Display/DashboardViewer";
import PaymentViewer from "./Layout/Display/PaymentViewer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaymentViewer/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
