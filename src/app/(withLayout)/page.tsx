"use client";

import { Carousel } from "@/components/CarouselComp";
import { FeaturedCars } from "@/components/FeaturedCard/FeaturedCars";
import { PopMakes } from "@/components/PopMakes";
import { PopSearches } from "@/components/PopSearches";
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
  bidContestants: Array<{}>;
};
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [data, setData] = useState<dataType[]>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://auction-back-end.onrender.com/api/car"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const cars = await res.json();
        setData(cars);
      } catch (error: any) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <Stack width={`100%`} gap={8} position={`relative`}>
      <Stack position={`absolute`}>
        <ToastContainer />
      </Stack>
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
