"use client";

import { SellWithUsCarousel } from "@/components/SellWithUsCarousel";
import { sellwithUsImg } from "@/utils/dumData";
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type dataType = { brandTitle: string; img: string };

const Page = () => {
  const [data, setData] = useState<Array<dataType>>();

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/brand");
      const brands = await res.json();
      setData(brands);
    }
    getData();
  }, []);
  const img = sellwithUsImg;
  return (
    <Stack>
      <Stack padding={"0 5vw"} maxWidth={"1920px"} margin={"0 auto"} mt={10}>
        <Stack
          mb={"84px"}
          direction={"row"}
          gap={"125px"}
          padding={"32px 0"}
          justifyContent={"space-between"}
        >
          <Stack width={500} gap={3}>
            <Typography variant="h2">
              Thank you, please share your email address
            </Typography>
            <Stack>
              <FormControl>
                <TextField placeholder="Business email"></TextField>
                <Button size="large">Get Started</Button>
              </FormControl>
            </Stack>
          </Stack>

          <Stack width={600}>
            <SellWithUsCarousel img={img} />
          </Stack>
        </Stack>
      </Stack>
      <Stack padding={"0 5vw"} maxWidth={"1920px"} margin={"0 auto"} mt={10}>
        <Stack
          padding={"77px 0 100px"}
          bgcolor={"#f5f5f5"}
          borderRadius={"24px"}
          border={"1px solid #e0e0e0"}
        >
          <Typography variant="h2">Accelrate your revenue</Typography>
          <Stack
            maxWidth={"1000px"}
            margin={"20px auto 0"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {data?.map((a, index) => {
              return <Stack key={index}></Stack>;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Page;
