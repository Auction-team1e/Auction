import { UserSvg } from "@/svgs/User";
import { Box, Modal, Stack } from "@mui/material";
import { SignUp } from "../SignUp/SignUp";
import { useCarData, ContextType } from "@/context/DataContext";
import { Login } from "../Login/Login";
import { useState } from "react";
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
  const [handle, setHandle] = useState(true);

  return (
    <Stack
      width={94.21}
      height={38}
      border={`1px solid white`}
      justifyContent={`center`}
      borderRadius={`100px`}
      sx={{ cursor: `pointer` }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        onClick={() => setOpen(true)}
        direction={`row`}
        gap={1}
        alignItems={`center`}
        justifyContent={`center`}
        color={`white`}
        fontSize={14}
      >
        <UserSvg />
        Log in
      </Stack>
      <Modal open={open}>
        <Box sx={style}>
          {handle == true ? (
            <Login setHandle={setHandle} />
          ) : (
            <SignUp setHandle={setHandle} />
          )}
        </Box>
      </Modal>
    </Stack>
  );
};
