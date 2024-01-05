// actions.js
export const login = (username, password) => ({
    type: 'LOGIN',
    payload: { username, password },
  });
  
  export const signup = (username, password, dateOfBirth) => ({
    type: 'SIGNUP',
    payload: { username, password, dateOfBirth },
  });
  