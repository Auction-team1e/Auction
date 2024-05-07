"use client";
import { BrandAddModal } from "@/components/BrandAddModal";
import { ButtonBase, Stack, Typography } from "@mui/material";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import { Edith, Trash } from "@/svgs";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface infoType {
  carModel: string;
  brand: string;
  startPrice: string;
}

const Style = {
  padding: "15px",
  fontsize: "12px",
  fontweight: "600",
  lineheight: "16px",
};
const fontStyle = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#3F4145",
};

export const CarsTable = () => {
  const [info, setInfo] = React.useState<infoType[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:4000/api/car`);
        const data = await res.json();
        console.log("info", data);
        setInfo(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <Stack mt={"50px"}>
      <BrandAddModal />
      <Stack
        borderRadius={"12px"}
        border={"1px solid #ECEDF0"}
        bgcolor={"white"}
        direction={"row"}
        width={"1100px"}
      >
        <Stack>
          <Stack borderBottom={"1px solid #ECEDF0"} width={"1100px"}>
            <Stack direction={"row"} ml={"70px"}>
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
                Date added
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            {info.map((e, index) => (
              <Stack
                borderBottom={"1px solid #ECEDF0"}
                direction={"row"}
                key={index}
              >
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    p: "20px 40px 20px 20px",
                    color: grey[800],
                    "&.Mui-checked": {
                      color: grey[800],
                    },
                  }}
                />
                <Stack
                  justifyContent={"center"}
                  alignItems={"start"}
                  width={"300px"}
                >
                  <Typography sx={fontStyle}>{e.carModel}</Typography>
                </Stack>
                <Stack justifyContent={"center"} width={"200px"}>
                  <Typography sx={fontStyle}>{e.brand}</Typography>
                </Stack>

                <Stack justifyContent={"center"} width={"200px"}>
                  <Typography sx={fontStyle}>{"$" + e.startPrice}</Typography>
                </Stack>
                <Stack justifyContent={"center"} width={"200px"}>
                  <Typography sx={fontStyle}>2024-01-10</Typography>
                </Stack>
                <Stack gap={"15px"} alignItems={"center"} direction={"row"}>
                  <ButtonBase sx={{ borderRadius: "10px", p: "10px" }}>
                    <Trash />
                  </ButtonBase>
                  <ButtonBase sx={{ borderRadius: "10px", p: "10px" }}>
                    <Edith />
                  </ButtonBase>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
