import { Carousel } from "@/components/CarouselComp";
import { FeaturedCars } from "@/components/FeaturedCard/FeaturedCars";
import { PopMakes } from "@/components/PopMakes";
import { PopSearches } from "@/components/PopSearches";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack width={`100%`} gap={8} position={`relative`}>
      <Carousel />
      <Stack alignItems={`center`} gap={8}>
        <PopMakes />
        <PopSearches />
        <FeaturedCars />
      </Stack>
    </Stack>
  );
};
export default Home;
