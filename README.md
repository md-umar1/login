# login

// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import GoogleButton from './components/GoogleButton';
import './App.css';
import Container from './container.png'

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSigninLinkClick = () => {
    setShowLoginForm(true);
  };

  const handleSignupFormClose = () => {
    setShowLoginForm(false);
  };

  return (
    <Provider store={store}>
        
      <div className="app-container">
        <div className="forms-container">
          {showLoginForm ? (
            <LoginForm />
            ) : (
              <>
              <SignupForm />
              <p className="signin-link" onClick={handleSigninLinkClick}>
                Already have an account? <span>Sign in</span>
              </p>
              </>
          )}
        <GoogleButton />         
        </div>
        
          <div>
            <img src={Container}   alt="A container with a bunch of books and other items" style={{width:'825px',height:'1000px'}}/>
          </div>
          </div>
          {/* <img src={Container}/> */}
    </Provider>
  );
};

export default App;

#App.css
body {
  display: flex;
  width: 1440px;
  height: 1024px;
  align-items: flex-start;
}

.app-container {
  display: flex;
  flex: 1;
}

.forms-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-display {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.image-display img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Add your additional styles for the .google-button, .auth-form, .signin-link, etc. */
#outlined-basic{
  display: flex;
width: 399px;
padding: 16px;
align-items: center;
gap: 2px;
}
.sign-up{
  width: 430px;
  display: flex;
  padding: 16px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
border-radius: 10px;
background: #367AFF;
color: #FFF;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 21.6px */
letter-spacing: -0.18px;
}


.or{
  display: flex;
align-items: center;
gap: 10px;
align-self: stretch;
margin-left:15px ;
margin-right: 15px;
color: #6E6E6E;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%; 


}


.img{
  width: 825px;
  height: 1000px;
}



#LoginForm.js
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


#GoogleButton.js
import React from 'react';
import './styles.css'

const GoogleButton = () => {
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="google-button" onClick={handleGoogleLogin}>
      Continue with Google
      <img
        src="https://img.icons8.com/color/48/000000/google-logo.png"
        alt="Google Logo" className='google'
      />
    </div>
  );
};

export default GoogleButton;



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



body{
    margin-left: 500px;
    margin-top: 100px;
    width: 1440px;
    height: 1024px;

}
.google-button{
    display: flex;
height: 30px;
margin-left: 10px;
padding: 16px 8px;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
border-radius: 10px;
border: 1px solid #E6E8E7;
background: #FFF;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.03);
width:410px;
color: #232323;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 21.6px */
letter-spacing: -0.18px;
}
.google{
    display: flex;
width: 24px;
height: 24px;
padding: 3.5px;
justify-content: center;
align-items: center;
}
.sn{
    color: #969696;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 27px */
}
.icon{
    margin-bottom: 136px;
    margin-left: -60px;
    display: flex;
align-items: center;
gap: 12px;
width: 32px;
height: 32px;
color: #232323;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 110%; /* 26.4px */
letter-spacing: -0.96px;
}
.textfield{
    /* display: flex; */
width: 399px;
padding: 16px;
align-items: center;
gap: 20px;
}
.signin-btn{
    display: flex;
    height: 40px;
padding: 16px 8px;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
width: 399px;
padding: 16px;
align-items: center;
gap: 20px;
border-radius: 10px;
background: #367AFF;
}


.googlesign{
    height: 40px;
    padding: 16px 8px;
    /* align-items: center; */
    gap: 8px;
    align-self: stretch;
    width: 399px;
    padding: 16px;
    align-items: center;
    border-radius: 10px;
    color:black;
border: 1px solid #E6E8E7;
background-color: #FFF;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.03); 
}
.auth{
    width: 430px;
    margin-right: 20px;
}

![Screenshot (86)](https://github.com/md-umar1/login/assets/93832342/d38ef49f-3d2e-48a5-862b-1663e6c2a154)



![Screenshot (88)](https://github.com/md-umar1/login/assets/93832342/cc1c2bae-80be-4cfd-a11e-dac125c9b4f6)



![Screenshot (87)](https://github.com/md-umar1/login/assets/93832342/9948ba52-ab99-48ac-9121-b29a5a4d0d88)


