import { Button, Input, Stack, Typography } from "@mui/material";
import { CarouselSlider } from "./CarouselSlider";
import { NumericFormat } from "react-number-format";

export const FeaturedCard = ({
  carModel,
  startPrice,
  img,
  carDetail,
}: {
  carModel: string;
  startPrice: number;
  img: string[];
  carDetail: string[];
}) => {
  return (
    <Stack border={"1px solid #e0e0e0"}>
      <CarouselSlider img={img} />
      <Stack px={3} py={3} gap={"10px"}>
        <Stack direction={"row"} justifyContent={"space-between"} mt={"10px"}>
          <Stack justifyContent={"center"}>
            <Typography fontSize={"16px"} fontWeight={700}>
              {carModel}
            </Typography>
            <Typography color={"#606060"}>{carDetail[1]}</Typography>
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
                height: "50px",
              }}
            ></Input>
            <Button
              sx={{
                backgroundColor: "#006C75",
                color: "white",
                height: "50px",
              }}
            >
              Bid
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} mt={"10px"}>
          <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
            <Typography noWrap>Opening bid</Typography>
            <NumericFormat
              value={`${startPrice}`}
              thousandSeparator=","
              suffix="$"
              disabled
              style={{
                border: "none",
                backgroundColor: "white",
                fontWeight: "600",
                fontSize: "16px",
                color: "black",
              }}
            />
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
