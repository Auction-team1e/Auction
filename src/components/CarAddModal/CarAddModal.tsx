"use client";

import { modalStyle } from "@/utils/dummyData";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Inputs } from "./Inputs";
import { useCarData, ContextType } from "@/app/context/CarContext";

export const CarAddModal = () => {
  const { selected } = useCarData() as ContextType;
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const carInfo = {
      model: e.target.model.value,
      desc: e.target.desc.value,
      information: e.target.info.value,
      startPrice: e.target.price.value,
      Time: e.target.time.value,
      brand: selected,
    };
    console.log("🚀 ~ handleSubmit ~ carInfo:", carInfo);
  };
  return (
    <Stack>
      <Button
        sx={{
          width: 280,
          height: 48,
          bgcolor: `black`,
          borderRadius: `8px`,
          color: `white`,
          textTransform: `none`,
          fontSize: 16,
        }}
        onClick={() => setOpen(true)}
      >
        <AddIcon sx={{ mr: 1 }} />
        Declare Auction
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <Stack direction={`row`} gap={`24px`} sx={modalStyle}>
            <Inputs />
          </Stack>
        </form>
      </Modal>
    </Stack>
  );
};
