import { inputs } from "@/utils/dummyData";
import { Box, Input, Stack, Tooltip, Typography } from "@mui/material";
import { AddImg } from "./AddImg";
import { RInputs } from "./RInputs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ProSpan = styled("span")({
  display: "inline-block",
  height: "1em",
  width: "1em",
  verticalAlign: "middle",
  marginLeft: "0.3em",
  marginBottom: "0.08em",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(https://mui.com/static/x/pro.svg)",
});
export const Inputs = () => {
  function Label({
    isProOnly,
  }: {
    componentName: string;
    valueType: string;
    isProOnly?: boolean;
  }) {
    if (isProOnly) {
      return (
        <Stack direction="row" spacing={0.5} component="span">
          <Tooltip title="Included on Pro package">
            <a
              href="https://mui.com/x/introduction/licensing/#pro-plan"
              aria-label="Included on Pro package"
            >
              <ProSpan />
            </a>
          </Tooltip>
        </Stack>
      );
    }
  }
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
          <Stack>
            <Typography mb={`8px`} fontSize={16} fontWeight={600}>
              Starting Bid Price
            </Typography>
            <Input
              disableUnderline
              name="price"
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
          <Stack>
            <Typography fontSize={16} fontWeight={600}>
              Starting Bid Price
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DemoItem
                  label={
                    <Label
                      componentName="DateTimePicker"
                      valueType="date time"
                    />
                  }
                >
                  <DateTimePicker />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Stack>
        </Stack>
      </Stack>
      <RInputs />
    </>
  );
};
