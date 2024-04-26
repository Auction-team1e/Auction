"use client";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SignUpNextStepInputs } from "@/utils/DummyData";
import { Dispatch } from "react";

export const SignUpNextStep = ({
  setHandle,
}: {
  setHandle: Dispatch<React.SetStateAction<string>>;
}) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const passwords = {
      password: e.target.enterPass.value,
      rePassword: e.target.confirmPass.value,
    };
    console.log("🚀 ~ handleSubmit ~ passwords:", passwords);
  };
  return (
    <Stack alignItems={`center`} width={424} height={610} py={1.6}>
      <CloseIcon sx={{ position: `relative`, left: 170, fontSize: 30 }} />
      <Typography mb={`32px`} fontSize={24} fontWeight={500}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack mt={"27.5px"} mb={`20px`}>
          <Stack mt={"27.5px"} mb={`6px`} gap={`16px`}>
            {SignUpNextStepInputs.map((val) => {
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
          <Typography
            width={346}
            color={`#717171`}
            fontSize={14}
            fontWeight={400}
          >
            8 characters or longer. Combine uppercase and lowercase letters.
          </Typography>
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
        <Typography
          mt={5}
          width={376}
          color={`#717171`}
          fontSize={14}
          fontWeight={400}
        >
          By joining, you agree to JamesEdition&apos;s{" "}
          <Link color={`#717171`}>Terms of Service</Link> and{" "}
          <Link color={`#717171`}>Privacy Policy</Link>, as well as to receive
          occasional emails from us.
        </Typography>
      </form>
      <Divider sx={{ mt: 5 }} variant="middle" flexItem />
      <Stack mt={3} direction={`row`} alignItems={`center`} gap={`4.6px`}>
        <Typography color={`#717171`} fontSize={14} fontWeight={400}>
          Already a member?
        </Typography>
        <Link
          onClick={() => setHandle("login")}
          sx={{
            cursor: `pointer`,
            color: `black`,
            textUnderlineOffset: `4.3px`,
            textDecorationColor: "rgba(120, 120, 120, 0.4)",
            transitionDuration: "0.22s",
            ":hover": {
              textDecorationColor: "black",
              transitionDuration: "0.3s",
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
