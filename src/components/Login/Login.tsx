"use client";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { loginFields } from "@/utils/dummyData";
import { useCarData, ContextType } from "@/context/DataContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContinueWith } from "./ContinueWith";
import { ToastContainer, toast } from "react-toastify";
import { Dispatch } from "react";

export const Login = ({
  setHandle,
}: {
  setHandle: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setOpen, open } = useCarData() as ContextType;
  const notify = () => toast("Wow so easy!");

  const formik = useFormik({
    initialValues: {
      email: ``,
      password: ``,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email invalid")
        .required("Enter your email address"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Enter your password"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Stack
        alignItems={`center`}
        width={424}
        height={`fit-content`}
        pt={1.6}
        pb={5}
      >
        <CloseIcon
          onClick={() => setOpen(!open)}
          sx={{ position: `relative`, left: 170, fontSize: 30 }}
        />
        <Typography mb={`32px`} fontSize={24} fontWeight={500}>
          Log in
        </Typography>
        <ContinueWith />
        <Divider style={{ width: 376 }}>OR</Divider>
        <form onSubmit={formik.handleSubmit}>
          <Stack mt={"27.5px"} mb={`40px`} gap={`16px`}>
            {loginFields.map((val) => {
              return (
                <Stack key={val.name}>
                  <Box
                    type={val.name == "email" ? "email" : "text"}
                    fontSize={17}
                    component={`input`}
                    height={48}
                    width={376}
                    border={
                      formik.touched.email && formik.errors.email
                        ? `1px solid #F74040`
                        : `1px solid #E0E0E0`
                    }
                    px={`17px`}
                    placeholder={val.pl}
                    id={`${val.name}`}
                    {...formik.getFieldProps(`${val.name}`)}
                  ></Box>
                </Stack>
              );
            })}
            <Stack fontSize={13} color={`#F74040`}>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </Stack>
          </Stack>
          <Button
            onClick={notify}
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
        <Stack mt={`16px`} alignItems={`center`}>
          <Typography
            mb={`42.5px`}
            color={`#151515`}
            fontSize={14}
            fontWeight={400}
          >
            Forgot password?
          </Typography>
          <Divider sx={{ width: 376 }} />
          <Stack
            mt={`20px`}
            direction={`row`}
            alignItems={`center`}
            gap={`4.6px`}
          >
            <Typography color={`#717171`} fontSize={14} fontWeight={400}>
              Not a member yet?
            </Typography>
            <Link
              sx={{
                cursor: `pointer`,
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
              onClick={() => setHandle(false)}
            >
              Sign up
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <ToastContainer />
    </>
  );
};
