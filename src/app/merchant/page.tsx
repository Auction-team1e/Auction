import { SideMenu } from "@/components/AdminPage/SideMenu";
import { CarAddModal } from "@/components/CarAddModal/CarAddModal";
import { IncOrdCard } from "@/components/IncOrdCard";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack alignItems={"center"}>
      <Stack bgcolor={"#F7F7F8"} width={"100vw"} alignItems={`center`}>
        <IncOrdCard />
      </Stack>
    </Stack>
  );
};
export default Page;
