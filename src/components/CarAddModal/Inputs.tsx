import { NumInputs, inputs } from "@/utils/dummyData";
import { Box, Input, Stack, Typography } from "@mui/material";
import { AddImg } from "./AddImg";
import { RInputs } from "./RInputs";

export const Inputs = () => {
  return (
    <>
      <Stack width={`593px`} gap={`24px`}>
        <Stack height={`fit-content`} gap={`16px`}>
          {inputs.map((val) => {
            return (
              <Stack key={val.name}>
                <Typography mb={`8px`} fontSize={16} fontWeight={600}>
                  {val.label}
                </Typography>
                <Box
                  component={`textarea`}
                  bgcolor={`#F7F7F8`}
                  border={`1px solid #D6D8DB`}
                  borderRadius={`8px`}
                  px={`12px`}
                  py={`10px`}
                  fontSize={18}
                  height={val.label == "About This Car" ? 128 : 44}
                  name={val.name}
                  sx={{ resize: `none`, outline: `none` }}
                ></Box>
              </Stack>
            );
          })}
        </Stack>
        <Stack height={`213px`}>
          <Typography mb={`8px`} fontSize={16} fontWeight={600}>
            Car Image
          </Typography>
          <AddImg />
        </Stack>
        <Stack height={`fit-content`} direction={`row`} gap={`16px`}>
          {NumInputs.map((val) => {
            return (
              <Stack key={val.name}>
                <Typography mb={`8px`} fontSize={16} fontWeight={600}>
                  {val.label}
                </Typography>
                <Input
                  disableUnderline
                  name={val.name}
                  type="number"
                  sx={{
                    outline: `none`,
                    bgcolor: `#F7F7F8`,
                    border: `1px solid #D6D8DB`,
                    borderRadius: `8px`,
                    px: `12px`,
                    py: `10px`,
                    fontSize: 18,
                    width: 249,
                    height: 44,
                  }}
                ></Input>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <RInputs />
    </>
  );
};
