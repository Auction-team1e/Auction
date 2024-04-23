import { PopSearches } from "@/components/PopSearches";
import CarProvider from "./context/CarContext";

export default function Home() {
  return (
    <CarProvider>
      <PopSearches />
    </CarProvider>
  );
}

//ads
