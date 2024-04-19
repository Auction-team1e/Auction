import { CarAddModal } from "@/components/CarAddModal/CarAddModal";
import CarProvider from "./context/CarContext";

export default function Home() {
  return (
    <CarProvider>
      <CarAddModal />
    </CarProvider>
  );
}
//ads
