import { CarsTable } from "@/components/MerchantPage/cars/CarsTable";
import { Stack } from "@mui/material";

const Auction = () => {
  return (
    <Stack height={"100vh"} bgcolor={"#F7F7F8"} direction={"row"}>
      <CarsTable />
    </Stack>
  );
};
export default Auction;
