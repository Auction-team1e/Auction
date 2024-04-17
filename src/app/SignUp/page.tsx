import { Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function SignUp() {
  return (
    <Stack
      alignItems={`center`}
      width={424}
      border={`1px solid black`}
      height={666.5}
      py={1.6}
    >
      <CloseIcon
        sx={{ position: `relative`, left: 170, fontSize: 30, fontWeight: 300 }}
      />
      <Typography fontSize={24} fontWeight={500}>
        Sign up
      </Typography>
    </Stack>
  );
}
