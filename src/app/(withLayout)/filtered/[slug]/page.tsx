"use client";
import { FeaturedCars } from "@/components/FeaturedCard/FeaturedCars";
import FilterBar from "@/components/FilterBar";
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

const Page = ({ params }: { params: { slug: string } }) => {
  const title = `${params.slug} For Sale`;
  const [data, setData] = useState<Array<dataType>>([]);
  const listings = `${data?.length} listings`;
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `http://localhost:4000/api/findBrand?slug=${params.slug}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log({ res });
      const car = await res.json();
      setData(car.result);
    }

    getData();
  }, [params.slug]);

  return (
    <Stack>
      <FilterBar />
      <FeaturedCars data={data} title={title} listings={listings} />
    </Stack>
  );
};

export default Page;
