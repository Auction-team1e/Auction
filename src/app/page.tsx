import { Carousel } from "@/components/CarouselComp";
import { PopMakes } from "@/components/PopMakes";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack width={`100%`} gap={8} position={`relative`}>
      <Carousel />
      <Stack alignItems={`center`}>
        <PopMakes />
      </Stack>
    </Stack>
  );
}

//ads
