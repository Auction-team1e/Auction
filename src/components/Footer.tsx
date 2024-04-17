"useclient";

const footer = [
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
];

import { Box, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack bgcolor={"black"} color={"white"}>
      <Stack px={"96px"} height={"540px"} direction={"row"}>
        {footer.map((a, index) => {
          return (
            <Stack gap={"20px"} height={"full"} key={index}>
              <Typography>{a.title}</Typography>
              <Stack bgcolor={"blue"}>{a.subTitles}</Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
