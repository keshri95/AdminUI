/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [users, setUsers] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ users, setUsers }}>
        {children}
      </AppContext.Provider>
    </>
  );
};


const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
