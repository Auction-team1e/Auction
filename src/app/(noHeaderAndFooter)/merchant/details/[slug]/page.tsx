import { OrderInfo } from "@/components/MerchantPage/order/OrderInfo";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack bgcolor={"#F7F7F8"} height={"100vh"} alignItems={"center"}>
      <OrderInfo />
    </Stack>
  );
};

export default Page;
