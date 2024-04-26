<<<<<<< HEAD
import Carousel from "@/components/CarouselComp";
import { FeaturedCars } from "@/components/FeaturedCars";
=======
import { CarDetail } from "@/components/CarDetail";
import { Carousel } from "@/components/CarouselComp";
import { FeaturedCard } from "@/components/FeaturedCard/FeaturedCard";
>>>>>>> ea678258b4bb3cd425f5089d49cec98df6058b91
import { PopMakes } from "@/components/PopMakes";
import { PopSearches } from "@/components/PopSearches";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack width={`100%`} gap={8} position={`relative`}>
      <Carousel />
      <Stack alignItems={`center`} gap={8}>
<<<<<<< HEAD
        <PopMakes />
        <PopSearches />
        <FeaturedCars />
=======
        <CarDetail />
>>>>>>> ea678258b4bb3cd425f5089d49cec98df6058b91
      </Stack>
    </Stack>
  );
};
export default Home;
//ads
