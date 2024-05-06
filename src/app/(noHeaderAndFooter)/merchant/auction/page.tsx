import { OrderBoard } from "@/components/MerchantPage/order/OrderBoard";
import { Stack } from "@mui/material";

const Auction = () => {
  return (
    <Stack height={"100vh"} bgcolor={"#F7F7F8"} direction={"row"}>
      <OrderBoard />
    </Stack>
  );
};
export default Auction;
