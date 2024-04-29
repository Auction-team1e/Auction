import { Telephone } from "@/svgs";
import { ButtonBase, Stack, TextareaAutosize, Typography } from "@mui/material";

const customStyle = {
  fontSize: "26px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "44px",
};
const custStySec = {
  fontSize: "16px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "24px",
};

export const Contact = () => {
  return (
    <Stack mt={"25px"}>
      <Typography sx={customStyle}>Ask a Question</Typography>
      <Stack mt={"30px"}>
        <Stack>
          <Stack direction={"row"} gap={"20px"}>
            <Stack
              width={"64px"}
              height={"64px"}
              borderRadius={"100%"}
              bgcolor={"black"}
            ></Stack>
            <Stack>
              <Typography sx={custStySec}>Exotic Cars</Typography>
              <Typography style={{ color: "#717171" }} sx={custStySec}>
                7 months with JamesEdition
              </Typography>
              <Stack
                mt={"10px"}
                alignItems={"center"}
                gap={"5px"}
                direction={"row"}
              >
                <Telephone />
                <Typography style={{ color: "#717171" }} sx={custStySec}>
                  Show phone number
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack mt={"48px"}>
            <Stack mb={"30px"}>
              <Typography
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                mb={"10px"}
              >
                Contact Agent
              </Typography>
              <TextareaAutosize
                color="neutral"
                minRows={6.5}
                variant="oulined"
              />
            </Stack>
            <ButtonBase
              sx={{
                width: "210px",
                height: "48px",
                color: "white",
                bgcolor: "#006C75",
              }}
            >
              <Typography
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"15px"}
              >
                Ask a question
              </Typography>
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
