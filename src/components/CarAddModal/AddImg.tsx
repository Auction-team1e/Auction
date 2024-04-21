import { CircularProgress, Input, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const CLOUD_NAME = "dlfnavahp";
const UPLOAD_PRESET = "zas8prdn";

export const AddImg = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageUrlOne, setImageUrlOne] = useState<string | null>(null);
  const [imageUrlTwo, setImageUrlTwo] = useState<string | null>(null);
  const [imageUrlThree, setImageUrlThree] = useState<string | null>(null);
  const [imageUrlFour, setImageUrlFour] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const images = ["One", "Two", "Three", "Four"];

  const fileChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event?.target?.files) {
      setLoading(true);
      const data = new FormData();
      data.append("file", event.target.files[0]);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const resJson = await res.json();
      if (resJson.url) {
        setImageUrl(resJson.url);
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "101vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Typography color={"white"}>Loading..</Typography>
          <CircularProgress />
        </Stack>
      )}
      <Stack direction={"row"} gap={1}>
        {images.map((value, index) => {
          return (
            <Stack
              key={index}
              width={135}
              height={175}
              border={`1px dashed #D6D8DB`}
              borderRadius={`16px`}
              alignItems={`center`}
              justifyContent={`center`}
              sx={{
                backgroundImage: `url(${
                  index == 0
                    ? imageUrl
                    : index == 1
                    ? imageUrlTwo
                    : index == 2
                    ? imageUrlThree
                    : imageUrlFour
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Stack
                component={`label`}
                alignItems={`center`}
                justifyContent={`center`}
                sx={{
                  width: "32px",
                  height: "32px",
                  bgcolor: `#ECEDF0`,
                  borderRadius: `120%`,
                  color: `black`,
                }}
              >
                <AddIcon />
                <Input
                  sx={{ display: "none" }}
                  type="file"
                  onChange={fileChangeHandler}
                />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};
