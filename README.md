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




