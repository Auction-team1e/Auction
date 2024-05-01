"use client";

import { CarDetail } from "@/components/CarDetailPage/CarDetail";
// import { CarInfo } from "@/components/CarDetailPage/CarInfo";
import { Contact } from "@/components/CarDetailPage/Contact";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

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

const Page = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Array<dataType>>();
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/car");
      const cars = await res.json();
      setData(cars);
    }
    getData();
  }, []);

  const filteredData = data?.filter((e) => {
    return e._id == params.slug;
  });
  console.log("filtered", filteredData);

  return (
    <Stack pt={"115px"} width={"100%"} alignItems={"center"}>
      <Stack>
        <CarDetail dataAr={filteredData} />
        {/* <CarInfo data={filteredData} /> */}
        <Contact />
      </Stack>
    </Stack>
  );
};

export default Page;
