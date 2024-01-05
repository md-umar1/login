

// SignupForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../actions';
import TextField from '@material-ui/core/TextField';
import icon from './icon.jpg'


const SignupForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    dispatch(signup(username, email, password, dateOfBirth));
  };

  return (
    <div className="auth-form">
     <div className="icon">
        <img src={icon} alt="icon" />
        <h3>Revolutie</h3>
      </div>
      <h2 className='up'>Signup</h2>
      <p className='sn'>Sign up to enjoy the feature of Revolutie</p>

      {/* Using Material-UI TextField for Email */}
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '20px' }}
      /><br/>

<TextField
        id="outlined-basic"
        label="Date of Birth"
        variant="outlined"
        // type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <br/>
  <TextField
        id="outlined-basic"
        label="Your Name"
        variant="outlined"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
<br/>
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
<br/>
      
        
      <button onClick={handleSignup} className='sign-up'>Sign up</button>
<div className='or'><svg xmlns="http://www.w3.org/2000/svg" width="182" height="2" viewBox="0 0 182 2" fill="none">
  <path d="M181.5 1H0" stroke="#D9D9D9"/>
</svg>
     <p className='txt'>or</p>
     <svg xmlns="http://www.w3.org/2000/svg" width="182" height="2" viewBox="0 0 182 2" fill="none">
  <path d="M181.5 1H0" stroke="#D9D9D9"/>
</svg>
</div>
    </div>
  );
};

export default SignupForm;
