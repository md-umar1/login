// reducers.js
const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload };
      case 'SIGNUP':
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  