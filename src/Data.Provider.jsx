import React, { createContext, useState, useContext } from "react";

// Создаем контекст
const DataContext = createContext();

const AppProvider = ({ children }) => {
  const [dataContext, setDataContext] = useState("");
  const [contractIdContext, setContractIdContext] = useState("");

  return (
    <DataContext.Provider
      value={{
        dataContext,
        setDataContext,
        contractIdContext,
        setContractIdContext,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Хук для использования данных из контекста
const useAppContext = () => useContext(DataContext);

export { AppProvider, useAppContext };
