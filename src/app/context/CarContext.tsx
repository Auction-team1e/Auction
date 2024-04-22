"use client";

import { Dispatch, createContext, useContext, useState } from "react";
export type ContextType = {
  selected: string;
  setSelected: Dispatch<React.SetStateAction<string>>;
  imageUrlOne: string;
  setImageUrlOne: Dispatch<React.SetStateAction<string>>;
  imageUrlTwo: string;
  setImageUrlTwo: Dispatch<React.SetStateAction<string>>;
  imageUrlThree: string;
  setImageUrlThree: Dispatch<React.SetStateAction<string>>;
  imageUrlFour: string;
  setImageUrlFour: Dispatch<React.SetStateAction<string>>;
};

const CarContext = createContext<ContextType | null>(null);
export const useCarData = () => useContext(CarContext);

const CarProvider = ({ children }: { children: any }) => {
  const [selected, setSelected] = useState<string>("");
  const [imageUrlOne, setImageUrlOne] = useState<string>("");
  const [imageUrlTwo, setImageUrlTwo] = useState<string>("");
  const [imageUrlThree, setImageUrlThree] = useState<string>("");
  const [imageUrlFour, setImageUrlFour] = useState<string>("");

  return (
    <CarContext.Provider
      value={{
        selected,
        setSelected,
        imageUrlOne,
        setImageUrlOne,
        imageUrlTwo,
        setImageUrlTwo,
        imageUrlThree,
        setImageUrlThree,
        imageUrlFour,
        setImageUrlFour,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
export default CarProvider;
