import { UserSvg } from "@/svgs/User";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SignUp } from "../SignUp/SignUp";
import { useCarData, ContextType } from "@/context/DataContext";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export const LoginModal = () => {
  const { open, setOpen } = useCarData() as ContextType;

  return (
    <Stack
      width={94.21}
      height={38}
      onClick={() => setOpen(!open)}
      border={`1px solid black`}
      alignItems={`center`}
      justifyContent={`center`}
      borderRadius={`100px`}
    >
      <Stack direction={`row`} gap={1} alignItems={`center`}>
        <UserSvg />
        Log in
      </Stack>
      <Modal open={open}>
        <Box sx={style}>
          <SignUp />
        </Box>
      </Modal>
    </Stack>
  );
};
