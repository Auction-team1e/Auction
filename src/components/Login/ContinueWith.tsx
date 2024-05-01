import { signUpBtn } from "../../utils/DummyData";
import { Button, Stack, Typography } from "@mui/material";

export const ContinueWith = () => {
  return (
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
  );
};
