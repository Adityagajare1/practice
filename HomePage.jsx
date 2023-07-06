import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MovingText from "react-moving-text";
import image1 from "./assets/slide03.jpg";
import image2 from "./assets/slide06.jpg";
import styled from "@emotion/styled";
import TopNav from "./NavBar/TopNav";
import NavBar from "./NavBar/NavBar";

const backgroundImages = [image1, image2, image1, image2];

const FirstText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  position: "absolute",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    top: "30%",
    left: "10%",
    fontSize:"15px"
  },
  [theme.breakpoints.down("sm")]: {
    top: "10%",
    left: "10%",
    fontSize:"15px"
  },
}));
const SecondText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  position: "absolute",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    position: "absolute",
    top: "35%",
    left: "10%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    top: "15%",
    left: "10%",
  },
}));
const ThirdText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  position: "absolute",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    position: "absolute",
    top: "40%",
    left: "10%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    top: "20%",
    left: "10%",
  },
}));

const Leftarrow = ({ activeIndex, onClick }) => {
  return (
    <Box
      onClick={() => onClick(activeIndex)}
      component={"div"}
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70px",
        width: "70px",
        borderRadius: "50%",
        top: "40%",
        left: "15px",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.2)",
        backgroundSize: "cover",
        ":hover": {
          backgroundImage: `url(${
            activeIndex === 0
              ? backgroundImages[backgroundImages.length - 1]
              : backgroundImages[activeIndex - 1]
          })`,
          backgroundSize: "cover",
          transition: " 0.3s ease-in-out",
        },
      }}
    >
      <ArrowBackIosRoundedIcon />
    </Box>
  );
};

const RightArrow = ({ activeIndex, onClick }) => {
  return (
    <Box
      onClick={() => onClick(activeIndex)}
      component={"div"}
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70px",
        width: "70px",
        borderRadius: "50%",
        top: "40%",
        left: "93%",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease-in-out",
        backgroundSize: "cover",
        ":hover": {
          backgroundImage: `url(${
            activeIndex === backgroundImages.length - 1
              ? backgroundImages[0]
              : backgroundImages[activeIndex + 1]
          })`,
          transition: " 0.3s ease-in-out",
        },
      }}
    >
      <ArrowForwardIosRoundedIcon />
    </Box>
  );
};

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const goToPreviousSlide = () => {
    console.log("left");
    setActiveIndex(
      activeIndex === 0 ? backgroundImages.length - 1 : activeIndex - 1
    );
  };

  const goToNextSlide = () => {
    console.log("right");
    setActiveIndex(
      activeIndex === backgroundImages.length - 1 ? 0 : activeIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <TopNav />
      <NavBar />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          bgcolor: "black",
          position: "relative",
        }}
      >
        <MovingText
          type="slideInFromBottom"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <FirstText
            sx={{zIndex: 20, position: "absolute", top: "50%", left: "10%", fontWeight: 700, color: "white", display: "block" }}
            variant="h6"
          >
            {" "}
            The Goal of Education Is The Advancement of Knowledge
          </FirstText>
        </MovingText>
        <MovingText
          type="slideInFromLeft"
          duration="3000ms"
          delay="3s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          style={{  }}
        >
          <SecondText
            sx={{
              fontWeight: 700,
              fontSize: "60px",
              color: "white",
              display: "block",
              zIndex: 20, position: "absolute", top: "60%", left: "10%"
            }}
            variant="h4"
          >
            {" "}
            Take The First Step
          </SecondText>
        </MovingText>
        <MovingText
          type="slideInFromRight"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          style={{ }}
        >
          <ThirdText
            sx={{
              fontWeight: 700,
              fontSize: "60px",
              color: "white",
              display: "block",
              zIndex: 30, position: "absolute", top: "70%", left: "10%" 
            }}
            variant="h4"
          >
            {" "}
            To Knowledge with us
          </ThirdText>
        </MovingText>
        `{" "}
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagee ${index + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              maxHeight: "100%",
              transition: "0.8s ease-in-out",
              backgroundImage: "linearGradient",
              opacity: index === activeIndex ? 1 : 0,
              animation:
                index === activeIndex ? "fade-in 2.5s ease-in-out" : "fade",
            }}
          />
        ))}
        `
        <Leftarrow activeIndex={activeIndex} onClick={goToPreviousSlide} />
        <RightArrow activeIndex={activeIndex} onClick={goToNextSlide} />
      </Box>
    </>
  );
};

export default HomePage;