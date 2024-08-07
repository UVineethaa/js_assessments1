import React, { createContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: 'John Doe',
    isLoggedIn: false,
  });

  const toggleLogin = () => {
    setState((prevState) => ({
      ...prevState,
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  return (
    <AppContext.Provider value={{ state, toggleLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };