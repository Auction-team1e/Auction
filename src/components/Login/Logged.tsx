import { useCarData, ContextType } from "@/context/DataContext";
import { Menu, MenuItem, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
type dataType = { brandTitle: string; img: string };

export const Logged = () => {
  const { scrolling } = useCarData() as ContextType;
  const [data, setData] = useState<Array<dataType>>();
  console.log("🚀 ~ Logged ~ data:", data);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/user");
      const users = await res.json();
      setData(users);
    }
    getData();
  }, []);
  return (
    <>
      <Stack
        onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
        height={`100%`}
        color={scrolling ? "black" : `white`}
        direction={`row`}
        alignItems={`center`}
        sx={
          scrolling
            ? {
                cursor: `pointer`,
                ":hover": {
                  borderBottom: `1px solid black`,
                },
              }
            : {
                cursor: `pointer`,
                ":hover": {
                  borderBottom: `1px solid white`,
                },
              }
        }
        justifyContent={`center`}
        fontSize={14}
      >
        UserName
        {open == false ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </Stack>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Just For You</MenuItem>
        <MenuItem onClick={handleClose}>Saved Listings</MenuItem>
        <MenuItem onClick={handleClose}>Saved Searches</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </>
  );
};
