import { SideMenu } from "@/components/AdminPage/SideMenu";
import { CarAddModal } from "@/components/CarAddModal/CarAddModal";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack bgcolor={"#F7F7F8"} alignItems={`center`}>
      <Stack width={1720}>
        <SideMenu />
      </Stack>
    </Stack>
  );
};
export default Page;
