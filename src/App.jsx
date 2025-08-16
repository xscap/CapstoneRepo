import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeMessage from "./Authentication/Welcome/WelcomeMessage";
import LoginPage from "./Authentication/Login/LoginPage";
import RegisterPage from "./Authentication/Register/RegisterPage";
import Report from "./Reports/Report";
import Invoices from "./Invoices/Invoices";
import Customers from "./Customers/Customers"
import DashboardPage from "./FinalDisplay/Dashboard/Dashboard.page";
import MainNav from "./Dashboard/Navigation/MainNavigation";
import InvoicePage from "./FinalDisplay/Invoicing/Invoice.page";
import Payments from "./Payments/Payments";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Payments/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
