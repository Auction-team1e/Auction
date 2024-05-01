import { SideMenu } from "@/components/MerchantPage/SideMenu";
// import { CarAddModal } from "@/components/CarAddModal/CarAddModal";
import { IncOrdCard } from "@/components/MerchantPage/IncOrdCard";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack bgcolor={"#F7F7F8"} width={"100vw"} alignItems={"center"}>
      <Stack direction={"row"} width={"1720px"} alignItems={`center`}>
        <SideMenu />
        <IncOrdCard />
      </Stack>
    </Stack>
  );
};
export default Page;
