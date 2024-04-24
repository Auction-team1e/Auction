import { Box, Input, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const style = {
  position: "absolute" as "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 545,
  bgcolor: "background.paper",
  borderRadius: `10px`,
  boxShadow: 24,
  p: 4,
};

export const SearchModal = () => {
  const [open, setOpen] = useState(false);

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
      >
        <SearchIcon sx={{ fontSize: 23 }} />
        Search Cars
      </Stack>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Input placeholder="Search Cars" sx={{ width: 475 }}></Input>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};
