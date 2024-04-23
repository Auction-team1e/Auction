import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { CarouselSlider } from "./CarouselSlider";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const FeaturedCard = () => {
  return (
    <Stack width={"558.66px"} height={"467.8px"}>
      <CarouselSlider />
      <Stack px={3} gap={"10px"}>
        <Stack direction={"row"} justifyContent={"space-between"} mt={"10px"}>
          <Stack justifyContent={"center"}>
            <Box>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                Contact <MailOutlineIcon />
              </Stack>
            </Box>
          </Stack>
          <Stack gap={"3px"}>
            <Stack
              direction={"row"}
              gap={"50px"}
              justifyContent={"space-between"}
              px={"10px"}
              mt={"10px"}
            >
              <Typography>Opening bid</Typography>
              <Stack justifyContent={"center"}>
                <Typography fontWeight={700}>2000$</Typography>
              </Stack>
            </Stack>
            <Box>
              <Input
                type="number"
                placeholder="Max bid(usd)"
                disableUnderline
                sx={{
                  border: "0.1px solid grey",
                  borderRadius: "5px",
                  px: "10px",
                }}
              ></Input>
              <Button>Bid</Button>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Typography>2018 Bentley Bentayga Black Edition Sedan 4D</Typography>
          <Typography>Las Vegas, NV, United States</Typography>
          <Stack
            direction={"row"}
            gap={"50px"}
            justifyContent={"space-between"}
          >
            <Typography>Opening bid</Typography>
            <Typography fontWeight={700}>2000$</Typography>
          </Stack>
          <Box>
            <Input
              type="number"
              placeholder="Max bid(usd)"
              disableUnderline
            ></Input>
            <Button>Bid</Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
