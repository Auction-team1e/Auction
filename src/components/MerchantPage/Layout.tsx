"use client";

import { Stack } from "@mui/material";
import { SideMenu } from "./SideMenu";
import { AdminHeader } from "../AdminHeader";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems={"center"}>
      <AdminHeader />
      <Stack direction={"row"}>
        <SideMenu />
        {children}
      </Stack>
    </Stack>
  );
};
