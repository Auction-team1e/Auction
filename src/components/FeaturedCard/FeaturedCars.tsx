"use client";

import { Stack, Typography } from "@mui/material";
import { FeaturedCard } from "./FeaturedCard";

type dataType = {
  _id: number;
  carModel: string;
  brand: string;
  startPrice: number;
  description: string;
  carDetails: string[];
  img: string[];
  endTime: string;
};

export const FeaturedCars = ({
  data,
  title,
}: {
  data: dataType[] | undefined;
  title: string;
}) => {
  return (
    <Stack margin={"50px auto 100px"} maxWidth={1920} padding={"0 5vw"}>
      <Typography fontSize={"27px"} fontWeight={400} lineHeight={"38px"}>
        {title}
      </Typography>
      <Stack
        display={"grid"}
        gridTemplateColumns={"minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"}
        sx={{ gridGap: "30px 23px" }}
        gridAutoRows={"auto"}
      >
        {data?.map((a, index) => (
          <FeaturedCard
            carModel={a.carModel}
            startPrice={a.startPrice}
            img={a.img}
            carDetail={a.carDetails}
            endDate={a.endTime}
            _id={a._id}
            key={index}
          />
        ))}
      </Stack>
    </Stack>
  );
};
