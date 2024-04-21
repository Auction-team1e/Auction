import { Google } from "@/svgs/google";
import { FaceBook } from "@/svgs/facebook";
import { Height } from "@mui/icons-material";

export const fields = [
  { pl: "First name", name: "first" },
  { pl: "Last name", name: "last" },
  { pl: "Email", name: "email" },
];

export const signUpBtn = [
  { text: "Continue with Google", svg: <Google /> },
  { text: "Continue with Facebook", svg: <FaceBook /> },
];

export const SignUpNextStepInputs = [
  { pl: "Enter password", name: "enterPass" },
  { pl: "Confirm password", name: "confirmPass" },
];

export const footer = [
  {
    title: "JamesEdition",
    subTitles: [
      "About",
      "Contact",
      "Careers",
      "Help & FAQ",
      "Terms",
      "Privacy",
    ],
  },
  {
    title: "Brands",
    subTitles: [
      "Mercedes Benz",
      "BMW",
      "Buggatti",
      "Lamborghini",
      "Ferrari",
      "Pagani",
      "Brabus",
      "Bentley",
      "Audi",
      "McLaren",
      "Porsche",
    ],
  },
  {
    title: "For Business",
    subTitles: ["Sell With Us", "Partner", "Linking"],
  },
];

export const language = ["English", "Mongolian"];
export const currency = ["USD", "MNT"];

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1220,
  height: `fit-content`,
  bgcolor: "background.paper",
  borderRadius: `12px`,
  p: 4,
};

export const inputs = [
  { label: "Car Model", name: "model" },
  { label: "About This Car", name: "desc" },
  { label: "information", name: "info" },
];

export const NumInputs = [
  { label: "Starting Bid Price", name: "price" },
  { label: "Time", name: "time" },
];

export const Brands = [
  "Bugatti",
  "Pagani",
  "Koenigsegg",
  "Ferrari",
  "Lamborghini",
  "Mercedes",
  "Rolls-Royce",
  "McLaren",
  "Brabus",
  "Porsche",
  "Aston Martin",
  "Bentley",
  "Maybach",
  "BMW",
];

export const carDetails = [
  { label: "Year", name: "year" },
  { label: "Location", name: "location" },
  { label: "Address", name: "address" },
  { label: "Mileage", name: "mileage" },
  { label: "Engine", name: "engine" },
  { label: "Gearbox", name: "gearbox" },
  { label: "Car type", name: "carType" },
];

export const carDetailsSecod = [
  { label: "Drive", name: "drive" },
  { label: "Drive train", name: "driveTrain" },
  { label: "Fuel type", name: "fuelType" },
  { label: "Power", name: "power" },
  { label: "Condition", name: "condition" },
  { label: "Color", name: "color" },
  { label: "Interior color", name: "intColor" },
];
