"use client";

import { Dispatch, createContext, useContext, useState } from "react";
export type ContextType = {
  selected: string;
  setSelected: Dispatch<React.SetStateAction<string>>;
};

const CarContext = createContext<ContextType | null>(null);
export const useCarData = () => useContext(CarContext);

const CarProvider = ({ children }: { children: any }) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <CarContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
export default CarProvider;
