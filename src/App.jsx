import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeMessage from "./Authentication/Welcome/WelcomeMessage";
import LoginPage from "./Authentication/Login/LoginPage";
import RegisterPage from "./Authentication/Register/RegisterPage";
import Navbar from "./Dashboard/Navigation/Navbar";
import Invoices from "./Invoices/Invoices";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Invoices />} />   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
