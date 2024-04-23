import { Google } from "@/svgs/google";
import { FaceBook } from "@/svgs/facebook";

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

export const CarImages = [
  "http://res.cloudinary.com/dlfnavahp/image/upload/v1713755550/q5h6wuukxqutg0zstloh.webp",
  "http://res.cloudinary.com/dlfnavahp/image/upload/v1713755556/r5yzosycz4j8wlfshsi0.webp",
];

export const language = ["English", "Mongolian"];
export const currency = ["USD", "MNT"];
