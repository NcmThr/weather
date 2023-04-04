import React, { useState, createContext } from "react";

const LoaderContext = createContext();
const LoaderProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);

  const contextValue = {
    loading: loading,
    setIsLoading: setIsLoading,
  };

  return <LoaderContext.Provider value={contextValue}>{children}</LoaderContext.Provider>;
};

export { LoaderContext, LoaderProvider };
