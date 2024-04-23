import { Stack, Typography, ButtonBase } from "@mui/material";
import { CarImages } from "@/utils/dummyData";

export const PopMakes = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"1730px"}>
      <Stack marginBottom={"30px"} gap={"1470px"} direction={"row"}>
        <Typography fontSize={"27px"} fontWeight={400} lineHeight={"38px"}>
          Popular Makes
        </Typography>
        <ButtonBase sx={{ width: "60px", height: "24px", alignSelf: "center" }}>
          <Typography fontSize={"16px"} fontWeight={500} lineHeight={"24px"}>
            View all
          </Typography>
        </ButtonBase>
      </Stack>
      <Stack direction="row" spacing={2}>
        {CarImages.map((img, index) => (
          <Stack key={index} width={"195px"} height={"148px"}>
            <img src={img} alt={`Car ${index}`} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
