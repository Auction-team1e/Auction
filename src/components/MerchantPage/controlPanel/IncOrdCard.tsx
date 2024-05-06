import { Stack, Typography } from "@mui/material";

const style = {
  bgcolor: "white",
  width: "575px",
  height: "135px",
  borderRadius: "12px",
  padding: "16px 24px ",
  justifyContent: "space-between",
};

const textStyle = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "13px",
  letterSpacing: "-0.3px",
};

const textStyleSec = {
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "40px",
};

export const IncOrdCard = () => {
  return (
    <Stack bgcolor={"white"}>
      <Stack bgcolor={"#F7F7F8"}>
        <Typography
          p={"16px"}
          fontSize={"24px "}
          fontWeight={"700"}
          lineHeight={"13px"}
        >
          Overview
        </Typography>
        <Stack gap={"24px"} direction={"row"}>
          <Stack sx={style}>
            <Stack alignItems={"center"} gap={"4px"} direction={"row"}>
              <Typography sx={textStyle}>$ Income</Typography>
            </Stack>
            <Typography sx={textStyleSec}>235,000₮</Typography>
            <Typography color={"#5E6166"}>Today</Typography>
          </Stack>
          <Stack sx={style}>
            <Stack direction={"row"}>
              <Typography sx={textStyle}>Order</Typography>
            </Stack>
            <Typography sx={textStyleSec}>235,000₮</Typography>
            <Typography color={"#5E6166"}>Today</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
