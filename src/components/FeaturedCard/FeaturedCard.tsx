import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { CarouselSlider } from "./CarouselSlider";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const FeaturedCard = () => {
  return (
    <Stack width={"558.66px"} height={"467.8px"} bgcolor={"aqua"}>
      <CarouselSlider />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        mt={"30px"}
        px={3}
      >
        <Stack>
          <Box>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              Contact <MailOutlineIcon />
            </Stack>
          </Box>
        </Stack>
        <Stack>
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
