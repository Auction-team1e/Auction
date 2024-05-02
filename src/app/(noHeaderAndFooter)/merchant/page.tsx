import { SideMenu } from "@/components/MerchantPage/SideMenu";
import { CarBoard } from "@/components/MerchantPage/controlPanel/CarBoard";
// import { CarAddModal } from "@/components/CarAddModal/CarAddModal";
import { IncOrdCard } from "@/components/MerchantPage/controlPanel/IncOrdCard";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack bgcolor={"#F7F7F8"} width={"100vw"} alignItems={"center"}>
      <Stack gap={"40px"} direction={"row"} width={"1720px"}>
        <SideMenu />
        <Stack gap={"30px"}>
          <IncOrdCard />
          <CarBoard />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Page;
