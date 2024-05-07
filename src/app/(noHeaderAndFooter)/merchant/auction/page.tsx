import Layout from "@/components/MerchantPage/Layout";
import { OrderBoard } from "@/components/MerchantPage/order/OrderBoard";
import { Stack } from "@mui/material";

const Auction = () => {
  return (
    <Stack gap={"40px"} bgcolor={"#F7F7F8"}>
      <Layout>
        <Stack height={"100vh"}>
          <OrderBoard />
        </Stack>
      </Layout>
    </Stack>
  );
};
export default Auction;
