import { Button, Input, Stack, Typography } from "@mui/material";
import { CarouselSlider } from "./CarouselSlider";

export const FeaturedCard = () => {
  return (
    <Stack width={"558.66px"} height={"467.8px"}>
      <CarouselSlider />
      <Stack px={3} gap={"10px"}>
        <Stack direction={"row"} justifyContent={"space-between"} mt={"10px"}>
          <Stack justifyContent={"center"}>
            <Typography fontSize={"16px"} fontWeight={700}>
              2018 Bentley Bentayga
            </Typography>
            <Typography color={"#606060"}>
              Las Vegas, NV, United States
            </Typography>
          </Stack>
          <Stack gap={"3px"} justifyContent={"center"} direction={"row"}>
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
            <Button sx={{ backgroundColor: "#006C75", color: "white" }}>
              Bid
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={"120px"} mt={"10px"}>
          <Stack direction={"row"} gap={"5px"}>
            <Typography>Opening bid</Typography>
            <Typography fontWeight={600}>2000$</Typography>
          </Stack>
          <Stack direction={"row"} gap={"5px"}>
            <Typography>Auction Ends</Typography>
            <Typography fontWeight={600}>8h 59m</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
