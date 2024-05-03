import { OrderBoard } from "@/components/MerchantPage/order/OrderBoard";
import { Stack } from "@mui/material";

export const Page = () => {
  return (
    <Stack bgcolor={"#F7F7F8"} width={"100vw"}>
      <Stack mt={"115px"}>
        <OrderBoard />
      </Stack>
    </Stack>
  );
};
export default Page;
