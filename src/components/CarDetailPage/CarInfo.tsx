"use client";
import { useRef, useEffect, useState } from "react";

import { Stack, Typography, ButtonBase } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { DetailPageBidBox } from "./DetailPageBidBox";

const customStyle = {
  fontSize: "26px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "44px",
};
const custStySec = {
  fontSize: "16px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "24px",
};
const moreOrLess = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
type dataType = {
  _id: string;
  carModel: string;
  brand: string;
  startPrice: number;
  description: string;
  carDetails: string[];
  img: string[];
  endTime: string;
};

export const CarInfo = ({ data }: { data: dataType | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight > ref.current.clientHeight);
    }
  }, [data]);
  return (
    <Stack width={"1720px"}>
      <Stack borderBottom={"1px solid #E0E0E0"} gap={"8px"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={customStyle}>{data?.brand}</Typography>
          <Typography sx={customStyle}>
            <NumericFormat
              value={data?.startPrice}
              thousandSeparator=","
              suffix="$"
              disabled
              style={{
                border: "none",
                fontWeight: "400",
                fontSize: "28px",
                color: "black",
                width: `300px`,
                backgroundColor: `white`,
                textAlign: "end",
              }}
            />
          </Typography>
        </Stack>
        <Stack mb={"24px"}>
          <Typography fontSize={"14px"} fontWeight={"400"} lineHeight={"22px"}>
            {data?.carDetails[1]}
          </Typography>
        </Stack>
      </Stack>

      <Stack mt={"25px"} gap={2}>
        <Typography fontSize={"20px"} fontWeight={"400"} lineHeight={"32px"}>
          About This Car
        </Typography>
        <Stack borderBottom={"1px solid #E0E0E0"}>
          <Stack
            sx={{ ...custStySec, ...(isOpen ? null : moreOrLess) }}
            ref={ref}
            width={"full"}
          >
            {data?.description}
          </Stack>
          <Stack width={"100px"} mb={"25px"}>
            {showReadMore && (
              <ButtonBase
                sx={{ height: "30px", borderRadius: "50px" }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Read Less" : "Read More ..."}
              </ButtonBase>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={`row`} mt={"25px"}>
        <Stack
          borderBottom={"1px solid #E0E0E0"}
          gap={"16px"}
          padding={6}
          width={1}
        >
          <Typography sx={customStyle}>Car Details</Typography>
          {data?.carDetails.slice(0, 15).map((a, index) => {
            return (
              <Stack
                key={index}
                display={"grid"}
                gridTemplateColumns={"min-content auto"}
                sx={{ gridColumnGap: "48px", gridRowGap: "16px" }}
                alignItems={"center"}
              >
                <Stack component={"span"} width={100} color={"#717171"}>
                  {a > "" && index == 0
                    ? "Year"
                    : a > "" && index == 1
                    ? "Location"
                    : a > "" && index == 2
                    ? "Adress"
                    : a > "" && index == 3
                    ? "Milage"
                    : a > "" && index == 4
                    ? "Engine"
                    : a > "" && index == 5
                    ? "Gearbox"
                    : a > "" && index == 6
                    ? "Car type"
                    : a > "" && index == 7 && a > ""
                    ? "Drive"
                    : a > "" && index == 8 && a > ""
                    ? "Drive Train"
                    : a > "" && index == 9
                    ? "Fuel Type"
                    : a > "" && index == 10
                    ? "Power"
                    : a > "" && index == 11
                    ? "Condition"
                    : a > "" && index == 12
                    ? "Exteroir Color"
                    : a > "" && index == 13
                    ? "Interior Color"
                    : null}
                </Stack>
                <Typography>{a}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <DetailPageBidBox
          _id={data?._id}
          startPrice={data?.startPrice}
          endDate={data?.endTime}
        />
      </Stack>
    </Stack>
  );
};
