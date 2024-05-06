import { BrandAddModal } from "@/components/BrandAddModal";
import { Stack, Typography } from "@mui/material";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Style = {
  padding: "15px",
  fontsize: "12px",
  fontweight: "600",
  lineheight: "16px",
};

export const CarsTable = () => {
  return (
    <Stack mt={"50px"}>
      <BrandAddModal />
      <Stack
        borderRadius={"12px"}
        border={"1px solid #ECEDF0"}
        bgcolor={"white"}
        direction={"row"}
        width={"1180px"}
      >
        <Stack>
          <Stack
            width={"1180px"}
            borderBottom={"1px solid #ECEDF0"}
            direction={"row"}
            ml={"80px"}
          >
            <Typography style={{ width: "300px" }} sx={Style}>
              Cars
            </Typography>
            <Typography style={{ width: "200px" }} sx={Style}>
              Brand
            </Typography>
            <Typography style={{ width: "200px" }} sx={Style}>
              Price
            </Typography>
            <Typography style={{ width: "200px" }} sx={Style}>
              Date
            </Typography>
          </Stack>
          <Stack width={"80px"}>
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: grey[800],
                "&.Mui-checked": {
                  color: grey[800],
                },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
