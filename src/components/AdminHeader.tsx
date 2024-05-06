import { Bell } from "@/svgs/Bell";
import { Pinecone } from "@/svgs/Pinecone";
import { Profile } from "@/svgs/Profile";
import { ButtonBase, Stack, Typography } from "@mui/material";

export const AdminHeader = () => {
  return (
    <Stack
      height={"45px"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"black"}
      m={"200px 0px 200px 0px"}
      width={"100vw"}
    >
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        width={"1720px"}
      >
        <Pinecone />
        <Stack gap={"12px"} direction={"row"}>
          <ButtonBase>
            <Bell />
          </ButtonBase>
          <ButtonBase sx={{ gap: "8px" }}>
            <Profile />
            <Typography fontSize={"14px"} fontWeight={"400"} color={"white"}>
              Username
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
};
