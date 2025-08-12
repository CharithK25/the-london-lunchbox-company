import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './Login.css';
import homeImage from '../Assets/homeImage.jpg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string | number>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password.toString().trim()) {
      setError('Please fill out both fields.');
      return;
    }
    setError('');
    alert(`Logged in as ${email}`);
  };

  const movePage =() =>
  {
    navigate ('/signup');
  }

  const moveHome =() =>
  {
    navigate ('/');
  }

  return (
    <div className="zara-layout">
          <Navbar/>

      <div className="zara-form">
        <img
          className="zara-logo"
          src="https://www.londonlunchbox.com/wp-content/uploads/2019/11/logo.png" onClick={moveHome}
          alt="London Lunchbox Logo"
        />
        <form onSubmit={handleSubmit}>
          <label
          >EMAIL</label>
          <input type="email" placeholder="Enter your registered Email Id" value = {email} onChange={handleEmail} />

          <label>PASSWORD</label>
          <input type="password" placeholder="Enter your registered Password" value = {password.toString()} onChange={handlePassword} />

          <div className="link-row">
            <a href="#">Have you forgotten your password?</a>
          </div>

          <button type="submit" className="black-btn">LOG IN</button>
          <button  type="button" onClick={movePage} className="white-btn"> REGISTER </button>


          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="zara-image">
        <img
          src= {homeImage}
          alt="Model"
        />
      </div>
    </div>
  );
};

export default Login;