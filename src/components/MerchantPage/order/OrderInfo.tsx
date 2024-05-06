"use client";
import { ArrowBlackLeft } from "@/svgs"; // Correct import path
import { Stack, Typography } from "@mui/material";

interface infoType {
  brandTitle: string;
  firstName: string;
  email: string;
}

const textStyle = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "0.6px",
  color: "#121316",
};
const textSecStyle = {
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "20px",
};

export const OrderInfo = ({ order }: { order: infoType }) => {
  return (
    <Stack>
      <Stack mb={"25px"} bgcolor={"white"} width={"1220px"}>
        <Stack
          height={"56px"}
          gap={"30px"}
          alignItems={"center"}
          direction={"row"}
          ml={"25px"}
        >
          <ArrowBlackLeft />
          <Typography sx={textStyle}>Order details</Typography>
        </Stack>
      </Stack>
      <Stack p={"30px"} gap={"30px"} direction={"row"}>
        <Stack
          borderRadius={"12px"}
          p={"25px"}
          gap={"25px"}
          width={"640px"}
          bgcolor={"white"}
          border={"1px solid #ECEDF0"}
        >
          <Stack>
            <Typography style={{ color: "#3F4145" }} sx={textStyle}>
              Order ID number:
            </Typography>
            <Typography sx={textSecStyle}>#12345678 </Typography>
          </Stack>
          <Stack>
            <Typography style={{ color: "#3F4145" }} sx={textStyle}>
              Subscriber: {order.firstName}
            </Typography>
            <Stack gap={"10px"} alignItems={"center"} direction={"row"}>
              <Typography sx={textSecStyle}>{order.firstName}:</Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"20px"}
              >
                {order.email}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            borderRadius={"12px"}
            width={"580px"}
            height={"160px"}
            bgcolor={"#F7F7F8"}
          >
            <Stack
              sx={{
                borderBottomLeftRadius: "12px",
                borderTopLeftRadius: "12px",
              }}
              width={"180px"}
              height={"160px"}
              bgcolor={"grey"}
            ></Stack>
          </Stack>
        </Stack>
        <Stack
          borderRadius={"12px"}
          border={"1px solid #ECEDF0"}
          bgcolor={"white"}
          width={"520px"}
          p={"25px"}
        >
          <Stack pb={"20px"} borderBottom={"1px solid #ECEDF0"}>
            <Typography color={"#121316"} sx={textStyle}>
              Payment information
            </Typography>
          </Stack>
          <Stack>
            <Typography color={"#3F4145"} sx={textStyle}>
              Cars
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
