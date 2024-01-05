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
