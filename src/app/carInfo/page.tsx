import { CarDetail } from "@/components/CarDetailPage/CarDetail";
import { CarInfo } from "@/components/CarDetailPage/CarInfo";
import { Contact } from "@/components/CarDetailPage/Contact";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack pt={"115px"} width={"1720px"} justifyContent={"center"}>
      <CarDetail />
      <CarInfo />
      <Contact />
    </Stack>
  );
};
export default Page;
