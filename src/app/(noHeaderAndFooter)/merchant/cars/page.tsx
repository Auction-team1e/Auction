import { CarsTable } from "@/components/MerchantPage/cars/CarsTable";
import { Stack } from "@mui/material";

const Auction = () => {
  return (
    <Stack bgcolor={"#F7F7F8"}>
      <Stack height={"100vh"} ml={"40px"}>
        <CarsTable />
      </Stack>
    </Stack>
  );
};
export default Auction;
