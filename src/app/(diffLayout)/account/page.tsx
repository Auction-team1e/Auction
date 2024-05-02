import { AccountFileds } from "@/components/AccFields/AccountFileds";
import { Stack, Typography } from "@mui/material";

const Page = () => {
  return (
    <Stack px={8}>
      <Typography mt={19} fontSize={28}>
        Account Settings
      </Typography>
      <AccountFileds />
    </Stack>
  );
};
export default Page;
