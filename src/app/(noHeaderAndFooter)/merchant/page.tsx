import { Layout } from "@/components/MerchantPage/Layout";
import { CarBoard } from "@/components/MerchantPage/controlPanel/CarBoard";
// import { CarAddModal } from "@/components/CarAddModal/CarAddModal";
import { IncOrdCard } from "@/components/MerchantPage/controlPanel/IncOrdCard";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack width={"100vw"} bgcolor={"#F7F7F8"}>
      <Layout>
        <Stack ml={"45px"} gap={"30px"}>
          <IncOrdCard />
          <CarBoard />
          <CarAddModal />
        </Stack>
      </Layout>
    </Stack>
  );
};
export default Page;
