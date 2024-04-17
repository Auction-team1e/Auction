"use client";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { fields, signUpBtn } from "@/utils/dummyData";

export const SignUp = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const signUp = {
      firstName: e.target.first.value,
      lastName: e.target.last.value,
      email: e.target.email.value,
    };
    console.log("🚀 ~ handleSubmit ~ signUp:", signUp);
  };
  return (
    <Stack
      alignItems={`center`}
      width={424}
      border={`1px solid black`}
      height={666.5}
      py={1.6}
      m={2}
    >
      <CloseIcon sx={{ position: `relative`, left: 170, fontSize: 30 }} />
      <Typography mb={`32px`} fontSize={24} fontWeight={500}>
        Sign up
      </Typography>
      <Stack gap={`16px`} mb={`26px`}>
        {signUpBtn.map((val, index) => {
          return (
            <Button
              key={val.text}
              sx={{
                color: `#151515`,
                textTransform: `none`,
                border: `1px solid #E0E0E0`,
                width: 376,
                height: 48,
              }}
            >
              <Stack position={`relative`} right={index == 0 ? 85 : 75}>
                {val.svg}
              </Stack>
              <Typography fontSize={16} fontWeight={500}>
                {val.text}
              </Typography>
            </Button>
          );
        })}
      </Stack>
      <Divider>OR</Divider>
      <form onSubmit={handleSubmit}>
        <Stack mt={"27.5px"} mb={`40px`} gap={`16px`}>
          {fields.map((val) => {
            return (
              <Box
                fontSize={17}
                key={val.name}
                component={`input`}
                height={48}
                width={376}
                border={`1px solid #E0E0E0`}
                px={`17px`}
                placeholder={val.pl}
                name={val.name}
              ></Box>
            );
          })}
        </Stack>
        <Button
          type="submit"
          sx={{
            bgcolor: `#151515`,
            color: `white`,
            textTransform: `none`,
            width: 376,
            height: 53.5,
            fontSize: 16,
          }}
        >
          Continue
        </Button>
      </form>
      <Stack mt={3} direction={`row`} alignItems={`center`} gap={`4.6px`}>
        <Typography color={`#717171`} fontSize={14} fontWeight={400}>
          Already a member?
        </Typography>
        <Link
          sx={{
            color: `black`,
            textUnderlineOffset: `4.3px`,
            textDecorationColor: "rgba(120, 120, 120, 0.4)",
            transitionDuration: "0.22s",
            ":hover": {
              textDecorationColor: "black",
              transitionDuration: "0.22s",
            },
          }}
          fontSize={14}
          fontWeight={400}
        >
          Log in
        </Link>
      </Stack>
    </Stack>
  );
};
