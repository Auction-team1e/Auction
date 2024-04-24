"use client";
import { ArrowSmall, ShortArrow, ShortArrowRight } from "@/svgs";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { CarData } from "@/utils/dummyData";

type carData = {
  img: string;
  brandTitle: string;
  __v: string;
};

export const PopSearches = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [carData, setCarData] = useState<Array<carData>>([]);

  const prev = () => {
    setStartIdx(startIdx === 0 ? CarData.length - 6 : startIdx - 6);
  };

  const next = () => {
    setStartIdx(startIdx + 6 === CarData.length ? 0 : startIdx + 6);
  };

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/brand`);
        const data = await res.json();
        console.log(data);
        setCarData(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCarData();
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" width="1730px">
      <Stack marginBottom="30px" gap="1400px" direction="row">
        <Typography fontSize="27px" fontWeight={400} lineHeight="38px">
          Popular Searches
        </Typography>
        <Stack gap="20px" direction="row">
          <ButtonBase
            sx={{
              p: "8px",
              border: "#E0E0E0 1px solid",
              borderRadius: "100%",
            }}
            onClick={prev}
          >
            <ShortArrow />
          </ButtonBase>
          <ButtonBase
            sx={{
              p: "8px",
              border: "#E0E0E0 1px solid",
              borderRadius: "100%",
            }}
            onClick={next}
          >
            <ShortArrowRight />
          </ButtonBase>
        </Stack>
      </Stack>
      <Stack
        width="1730px"
        direction="row"
        height="280px"
        sx={{
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${startIdx * 570}px)`,
        }}
      >
        <Stack
          justifyContent="center"
          width="full"
          direction="column"
          gap="20px"
          flexWrap="wrap"
        >
          {carData.map((car, index) => (
            <Stack
              direction="row"
              key={index}
              border="#E0E0E0 solid 1px"
              width="560px"
              height="128px"
              sx={{
                transition: "border-color 300ms linear",
                "&:hover": {
                  border: "black 1px solid",
                },
              }}
            >
              <Stack
                sx={{
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
                width="128px"
                height="126px"
              >
                <img src={car.img} alt={car.brandTitle} />
              </Stack>
              <Stack gap="50px" p="15px">
                <Typography>{car.brandTitle}</Typography>
                <Stack gap="305px" direction="row" alignItems="center">
                  <Typography>{car.__v}</Typography>
                  <ButtonBase>
                    <ArrowSmall />
                  </ButtonBase>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
