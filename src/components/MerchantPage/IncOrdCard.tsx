import { Dollar } from "@/svgs";
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
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "-0.3px",
};

const textStyleSec = {
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "40px",
};

export const IncOrdCard = () => {
  return (
    <Stack direction={"row"} gap={"24px"}>
      <Stack sx={style}>
        <Stack gap={"4px"} direction={"row"}>
          <Dollar />
          <Typography sx={textStyle}>Income</Typography>
        </Stack>
        <Typography sx={textStyleSec}>235,000₮</Typography>
        <Typography color={"#5E6166"}>Өнөөдөр</Typography>
      </Stack>
      <Stack sx={style}>
        <Stack direction={"row"}>
          <Typography sx={textStyle}>Order</Typography>
        </Stack>
        <Typography sx={textStyleSec}>235,000₮</Typography>
        <Typography color={"#5E6166"}>Өнөөдөр</Typography>
      </Stack>
    </Stack>
  );
};
