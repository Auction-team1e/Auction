"useclient";

const titles = [
  "About",
  "Contact",
  "Careers",
  "Help & FAQ",
  "Terms",
  "Privacy",
];

import { Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Stack bgcolor={"black"} color={"white"}>
      <Stack px={"96px"} height={"540px"}>
        <Stack gap={"20px"}></Stack>
      </Stack>
    </Stack>
  );
};
