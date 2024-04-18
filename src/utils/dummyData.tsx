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
