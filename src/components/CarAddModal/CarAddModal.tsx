"use client";
import { modalStyle } from "@/utils/dummyData";
import { Button, Modal, Stack } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Inputs } from "./Inputs";
import { useCarData, ContextType } from "@/context/DataContext";

export const CarAddModal = () => {
  const {
    selected,
    imageUrlOne,
    imageUrlTwo,
    imageUrlThree,
    imageUrlFour,
    endDate,
  } = useCarData() as ContextType;
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    var today = new Date();
    today.setSeconds(0, 0);
    const options = {
      timeZone: "Asia/Ulaanbaatar",
      hour12: false,
    };
    const mongoliaTime = today.toLocaleString("en-US", options);

    const carInfo = {
      userId: "662493855942867ee5ccfd65",
      carModel: e.target.model.value,
      description: e.target.desc.value,
      information: e.target.info.value,
      startPrice: e.target.price.value,
      endTime: endDate,
      createdAt: mongoliaTime,
      brand: selected,
      img: [imageUrlOne, imageUrlTwo, imageUrlThree, imageUrlFour],
      carDetails: [
        e.target.year.value,
        e.target.location.value,
        e.target.address.value,
        e.target.mileage.value,
        e.target.engine.value,
        e.target.gearbox.value,
        e.target.carType.value,
        e.target.drive.value,
        e.target.driveTrain.value,
        e.target.fuelType.value,
        e.target.power.value,
        e.target.condition.value,
        e.target.color.value,
        e.target.intColor.value,
      ],
    };
    fetch("http://localhost:4000/api/car", {
      method: "POST",
      body: JSON.stringify(carInfo),
      headers: { "Content-Type": "application/json" },
    });
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
