"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "@/svgs/index";
import { Button, Stack, Typography } from "@mui/material";

const images: string[] = [
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
];

export function Carousel() {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack width={"full"} overflow={"hidden"} position={"relative"}>
      <Stack direction={"row"}>
        {images.map((imageUrl, index) => (
          <Stack
            sx={{
              bgcolor: "aqua",
              display: "flex",
              width: "100%",
              transition: "transform 1s ease",
              transform: `translateX(-${curr * 100}%)`,
            }}
          >
            <img
              key={index}
              src={imageUrl}
              alt={`image${index}`}
              style={{ width: "1920px", height: "960px" }}
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
                {images.map((e, i) => (
                  <Stack
                    key={i}
                    sx={{
                      transition: "all 0.3s ease",
                      width: "15px",
                      height: "1px",
                      bgcolor: "white",
                      ...(curr === i && { bgcolor: "black" }),
                      animation: "width-increase ease 1s infinity",
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
              House in Franschhoek, Western Cape, South Africa • $5,…
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
