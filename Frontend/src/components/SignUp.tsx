import React, { FC, useReducer, ChangeEvent, FormEvent, useEffect } from 'react';
import './SignUp.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import homeImage from '../Assets/homeImage.jpg';

type SignUpState = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string | number;
  password: string | number;
  confirm: string | number;
  error: string;
};

type Action =
  | { type: 'FIELD'; field: keyof SignUpState; value: string }
  | { type: 'ERROR'; message: string }
  | { type: 'RESET' };

const reducer = (state: SignUpState, action: Action): SignUpState => {
  switch (action.type) {
    case 'FIELD':
      return { ...state, [action.field]: action.value, error: '' };
    case 'ERROR':
      return { ...state, error: action.message };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const initialState: SignUpState = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  password: '',
  confirm: '',
  error: '',
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignUp: FC = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
    const [open, setOpen] = React.useState(false);
  const [countdown, setCountdown] = React.useState(5);

  const onField =
    (field: keyof SignUpState) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: 'FIELD', field, value: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, mobile, email, password, confirm } = state;

    if (!firstName || !lastName || !mobile || !email || !password || !confirm) {
      return dispatch({ type: 'ERROR', message: 'All fields are required.' });
    }
    if (password !== confirm) {
      return dispatch({ type: 'ERROR', message: 'Passwords do not match.' });
    }

    dispatch({ type: 'RESET' });
    navigate('/');
  };
    const handleClose = () => {
    setOpen(false);
  };

  // Countdown + redirect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    if (countdown === 0 && open) {
      navigate('/');
    }

    return () => clearTimeout(timer);
  }, [open, countdown, navigate]);

  return (
    <React.Fragment>
      <Navbar/> 
      <div className="signup-container signup-page">
    <div className="signup-container">
      <div className="signup-left">
        <img
          src="https://www.londonlunchbox.com/wp-content/uploads/2019/11/logo.png"
          alt="London Lunchbox Company"
          className="signup-logo"
        />
        <form onSubmit={handleSubmit} className="signup-form">
          <h1>Create Account</h1>

          {state.error && <p className="error-text">{state.error}</p>}

          <input
            type="text"
            placeholder="First name"
            value={state.firstName}
            onChange={onField('firstName')}
          />
          <input
            type="text"
            placeholder="Last name"
            value={state.lastName}
            onChange={onField('lastName')}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            value={state.mobile}
            onChange={onField('mobile')}
          />
          <input
            type="email"
            placeholder="E-mail address"
            value={state.email.toString()}
            onChange={onField('email')}
          />
          <input
            type="password"
            placeholder="Password"
            value={state.password.toString()}
            onChange={onField('password')}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={state.confirm.toString()}
            onChange={onField('confirm')}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="signup-right">
        <img
          src={homeImage}// Replace with your image path
          alt="Meal Pack"
          className="signup-right-img"
        />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Signup in progress</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Updating the data into the database. You will be redirected to the home screen in {countdown} second{countdown !== 1 ? 's' : ''}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
      </React.Fragment>
  );
};

export default SignUp;