"use client";
import { Box, Input, Modal, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const style = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 545,
  bgcolor: "background.paper",
  borderRadius: `10px`,
  boxShadow: 24,
  p: 4,
};
type dataType = {
  _id: number;
  carModel: string;
  brand: string;
  startPrice: number;
  description: string;
  carDetails: string[];
  img: string[];
  endTime: string;
};

export const SearchModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<Array<dataType> | undefined>();
  const [activeSearch, setActiveSearch] = useState<Array<dataType> | undefined>(
    []
  );
  console.log("🚀 ~ SearchModal ~ activeSearch:", activeSearch);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/car");
      const cars = await res.json();
      setData(cars);
    }
    getData();
  }, []);

  const handleSearch = (e: any) => {
    if (e.target.value == ``) {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      data?.filter((w) => w.carModel.includes(e.target.value)).slice(0, 8)
    );
  };

  return (
    <Stack>
      <Stack
        direction={`row`}
        alignItems={`center`}
        justifyContent={`center`}
        bgcolor={`#f1f1f1`}
        borderRadius={`100px`}
        width={545}
        height={38}
        onClick={() => setOpen(true)}
        color={`#717171`}
        gap={1}
        sx={{ cursor: `text` }}
      >
        <SearchIcon sx={{ fontSize: 23 }} />
        Search Cars
      </Stack>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Input
            onChange={(e) => handleSearch(e)}
            placeholder="Search Cars"
            sx={{ width: 475, borderBottom: `1px solid black`, pb: 1 }}
            disableUnderline
          ></Input>
          {activeSearch && activeSearch?.length > 0 && (
            <Stack sx={{ mt: 2 }} gap={1}>
              {activeSearch.map((s, index) => {
                return (
                  <Stack
                    key={index}
                    direction={`row`}
                    alignItems={`center`}
                    bgcolor={index == 0 ? `gray` : `white`}
                    sx={{ cursor: `pointer`, ":hover": { bgcolor: `gray` } }}
                    height={40}
                  >
                    <SearchIcon sx={{ color: `gray`, mr: 2 }} />
                    <Typography fontSize={17}>{s.carModel}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          )}
        </Box>
      </Modal>
    </Stack>
  );
};
