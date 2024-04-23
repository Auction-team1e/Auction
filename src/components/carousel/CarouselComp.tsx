"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "@/svgs/index";
import { Button, Stack, Typography } from "@mui/material";

interface Car {
  carModel: string;
  img: string[];
}

export function Carousel() {
  const [cars, setCars] = useState<Car[]>([]);
  const [curr, setCurr] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  const prev = () => {
    setCurr(curr === 0 ? cars.length - 1 : curr - 1);
    setCurrentTitle(
      cars[curr === 0 ? cars.length - 1 : curr - 1]?.carModel || ""
    );
  };

  const next = () => {
    setCurr(curr === cars.length - 1 ? 0 : curr + 1);
    setCurrentTitle(
      cars[curr === cars.length - 1 ? 0 : curr + 1]?.carModel || ""
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:4000/api/car`);
        const data = await res.json();
        setCars(data);
        setCurrentTitle(data[0]?.carModel || "");
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((curr) => (curr === cars.length - 1 ? 0 : curr + 1));
      setCurrentTitle(
        cars[curr === cars.length - 1 ? 0 : curr + 1]?.carModel || ""
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [cars]);

  return (
    <Stack width={"full"} overflow={"hidden"} position={"relative"}>
      <Stack direction={"row"}>
        {cars.map((car, index) => (
          <Stack
            key={index}
            sx={{
              display: "flex",
              width: "100%",
              transition: "transform 1s ease",
              transform: `translateX(-${curr * 100}%)`,
            }}
          >
            <img
              src={car.img[0]}
              alt={car.carModel}
              style={{ width: "1920px", height: "920px" }}
            />
          </Stack>
        ))}
      </Stack>

      <Stack
        width={"100%"}
        justifyContent={"space-between"}
        padding={"710px 96px 60px 96px"}
        direction={"row"}
        position={"absolute"}
      >
        <Stack>
          <Typography
            fontSize={"54px"}
            fontWeight={"400"}
            lineHeight={"68px"}
            color={"white"}
          >
            The World's
            <br /> Luxury Marketplace
          </Typography>
          <Typography
            marginTop={"20px"}
            color={"white"}
            fontSize={"11px"}
            fontWeight={"500"}
            lineHeight={"15px"}
            letterSpacing={"1px"}
          >
            One search • 400,000+ listings • 18,000+ trusted sellers • 120
            countries
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"flex-end"}>
          <Stack>
            <Stack direction={"row"}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={2}
              >
                {cars.map((_, i) => (
                  <Stack
                    key={i}
                    sx={{
                      transition: "all 0.3s ease",
                      width: "15px",
                      height: "1px",
                      bgcolor: "white",
                      ...(curr === i && { bgcolor: "black" }),
                    }}
                  />
                ))}
              </Stack>
              <Stack alignItems={"flex-end"} direction={"row"}>
                <Button onClick={prev}>
                  <ArrowLeft />
                </Button>
                <Button onClick={next}>
                  <ArrowRight />
                </Button>
              </Stack>
            </Stack>
            <Typography
              color={"white"}
              fontSize={"11px"}
              fontWeight={"500"}
              lineHeight={"15px"}
              letterSpacing={"1px"}
            >
              {currentTitle}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}