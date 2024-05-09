import { OrderBoard } from "@/components/MerchantPage/order/OrderBoard";
import { Stack } from "@mui/material";

const Auction = () => {
  return (
    <Stack gap={"40px"} bgcolor={"#F7F7F8"}>
      <Stack height={"100vh"}>
        <OrderBoard />
      </Stack>
    </Stack>
  );
};
export default Auction;
