"use client";

import { Dispatch, createContext, useContext, useState } from "react";
import { Dayjs } from "dayjs";
type SignUpType = {
  firstName?: string;
  lastName?: string;
  email?: string;
};
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
  endDate: Dayjs | null;
  setEndDate: Dispatch<React.SetStateAction<Dayjs | null>>;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  scrolling: boolean;
  setScrolling: Dispatch<React.SetStateAction<boolean>>;
  singUpFields: SignUpType;
  setSingUpFields: Dispatch<React.SetStateAction<SignUpType>>;
};

const CarContext = createContext<ContextType | null>(null);
export const useCarData = () => useContext(CarContext);

const CarProvider = ({ children }: { children: any }) => {
  const [selected, setSelected] = useState<string>("");
  const [imageUrlOne, setImageUrlOne] = useState<string>("");
  const [imageUrlTwo, setImageUrlTwo] = useState<string>("");
  const [imageUrlThree, setImageUrlThree] = useState<string>("");
  const [imageUrlFour, setImageUrlFour] = useState<string>("");
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [singUpFields, setSingUpFields] = useState<SignUpType>({});

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
        endDate,
        setEndDate,
        open,
        setOpen,
        scrolling,
        setScrolling,
        singUpFields,
        setSingUpFields,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
export default CarProvider;
