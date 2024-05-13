"use client";

import { Carousel } from "@/components/CarouselComp";
import { FeaturedCars } from "@/components/FeaturedCard/FeaturedCars";
import { PopMakes } from "@/components/PopMakes";
import { PopSearches } from "@/components/PopSearches";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

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
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/car");
      const cars = await res.json();
      setData(cars);
    }
    getData();
  }, []);

  return (
    <Stack width={`100%`} gap={8} position={`relative`}>
      <ToastContainer />
      <Carousel />
      <Stack alignItems={`center`} gap={8}>
        <PopMakes />
        <PopSearches />
        <FeaturedCars data={data} title={""} listings={undefined} />
      </Stack>
    </Stack>
  );
};
export default Home;
