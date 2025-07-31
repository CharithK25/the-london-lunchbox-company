// import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
// import './Login.css';
// import mealsImg from '../Assets/Meal.jpg'

// const Login: FC = () => {
//   const [email, setEmail]       = useState<string>('');
//   const [password, setPassword] = useState<string | number>('');
//   const [error, setError]       = useState<string>('');

//   const handleEmail  = (e: ChangeEvent<HTMLInputElement>): void =>
//     setEmail(e.target.value);

//   const handlePassword = (e: ChangeEvent<HTMLInputElement>): void =>
//     setPassword(e.target.value);

//   const handleSubmit   = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     if (!email.trim() || !password.toString().trim()) {
//       setError('Please fill out both fields.');
//       return;
//     }
//     setError('');
//     alert(`Logged in as ${email} (demo)`);
//   };

//   return (
//     <div className="login__wrapper"
//     style={{
//       backgroundImage: `url(${mealsImg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <form className="login__card" onSubmit={handleSubmit}>
//         <img
//           src="https://www.londonlunchbox.com/wp-content/uploads/2019/11/logo.png"
//           alt="London Lunchbox Company"
//           className="login__logo"
//         />
//         <h1 className="login__title">Account Login</h1>

//         {error && <p className="login__error">{error}</p>}

//         <label htmlFor="email" className="login__label">E-mail</label>
//         <input
//           id="email"
//           type="email"
//           className="login__input"
//           placeholder="you@example.com"
//           value={email}
//           onChange={handleEmail}
//         />

//         <label htmlFor="password" className="login__label">Password</label>
//         <input
//           id="password"
//           type="password"
//           className="login__input"
//           placeholder="********"
//           value={password.toString()}
//           onChange={handlePassword}
//         />

//         <button type="submit" className="login__button">Sign&nbsp;In</button>
//         <div className="login__links">
//           <a href="#">Forgot password?</a>
//           <a href="#">Create account</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

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
          {/* <h2>LOG IN</h2> */}
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