import { Stack, Typography, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ObjType = {
  brandTitle: string;
  img: string;
};

export const PopMakes = () => {
  const [brand, setBrand] = useState<Array<ObjType>>();
  const router = useRouter();

  useEffect(() => {
    async function fetchCarData() {
      try {
        const res = await fetch(`http://localhost:4000/api/brand`);
        const data = await res.json();
        setBrand(data);
      } catch (error) {
        console.error("error fetching car data:", error);
      }
    }
    fetchCarData();
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Stack
        justifyContent="center"
        maxWidth={"1720px"}
        width="100%"
        marginBottom="30px"
      >
        <Typography fontSize="27px" fontWeight={400} lineHeight="38px">
          Popular Makes
        </Typography>
      </Stack>
      <Stack
        justifyContent="space-between"
        gap="20px"
        direction="row"
        flexWrap="wrap"
        maxWidth="1730px"
        width="100%"
        sx={{
          "@media (max-width: 600px)": {
            justifyContent: "center",
          },
        }}
      >
        {brand?.map((e: { img: string; brandTitle: string }, index: number) => (
          <Stack
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%", lg: "20%" },
              height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
              maxWidth: "190px",
              maxHeight: "148px",
              cursor: "pointer",
              border: "#E0E0E0 1px solid",
              transition: "border-color 300ms linear",
              "&:hover": {
                border: "black 1px solid",
              },
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
            onClick={() => router.push(`/cars/${e.brandTitle}`)}
          >
            <CardMedia image={e.img} alt={`Car ${index}`} component="img" />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
