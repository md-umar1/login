// components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import icon from './icon.jpg';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import './styles.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    dispatch(login(email, password, keepLoggedIn));
  };

  return (
    <div className="auth">
      <div className="icon">
        <img src={icon} alt="icon" />
        <h3>Revolutie</h3>
      </div>
      <h2 className="up">Login</h2>
      <p className="sn">Sign in to enjoy the features of Revolutie</p>
      <div className="textfield">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              color="primary"
            />
          }
          label="Keep me logged in"
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleLogin} className='signin-btn' style={{width:'430px'}}>
          Sign in
        </Button>
        <br />
        <div className='or'><svg xmlns="http://www.w3.org/2000/svg" width="182" height="2" viewBox="0 0 182 2" fill="none">
  <path d="M181.5 1H0" stroke="#D9D9D9"/>
</svg>
     <p className='txt'>or</p>
     <svg xmlns="http://www.w3.org/2000/svg" width="182" height="2" viewBox="0 0 182 2" fill="none">
  <path d="M181.5 1H0" stroke="#D9D9D9"/>
</svg>
</div>
        <Button variant="contained" color="secondary" className='googlesign' style={{color:'black',background:'white',width:'430px'}}>
          Sign in with Google
        </Button>
        <br />
        <p style={{textAlign:'center',marginTop:'32px'}}>
          Need an account? <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
