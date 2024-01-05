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
