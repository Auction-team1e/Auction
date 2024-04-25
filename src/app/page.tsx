import { Carousel } from "@/components/CarouselComp";
import { PopMakes } from "@/components/PopMakes";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack gap={8}>
      <Carousel />
      <PopMakes />
    </Stack>
  );
}

//ads
