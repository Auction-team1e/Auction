import Carousel from "@/components/CarouselComp";
import { FeaturedCard } from "@/components/FeaturedCard/FeaturedCard";
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
        <FeaturedCard />
      </Stack>
    </Stack>
  );
};
export default Home;
//ads
