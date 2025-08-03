import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Button = () => {
  const navigate = useNavigate();
  return (
    <div className="popup">
      <label>
        <input type="checkbox" />
        <div tabIndex={0} className="burger">
          <svg viewBox="0 0 24 24" fill="white" height={20} width={20}>
            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
          </svg>
        </div>
        <nav className="popup-window">
          <legend>Quick Start</legend>
          <ul>
            <li>
              <button onClick={() => navigate('/login')}>
                <svg width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
                  <path d="M19 4v6.406l-3.753 3.741-6.463-6.462 3.7-3.685h6.516z" />
                </svg>
                <span>Log In</span>
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/register')}>
                <svg width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
                  <path d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z" />
                </svg>
                <span>Sign Up</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
    </div>
  );
};

export default Button;
