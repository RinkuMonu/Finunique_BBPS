import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
