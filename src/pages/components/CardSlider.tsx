import { styled } from "@mui/material";
import Slider from "react-slick";
import CardItem from "./CardItem";

const StyledDots = styled("ul")({
  right: "16px",
  bottom: "16px",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
});
const StyledDotItem = styled("div")({
  width: "18px",
  height: "18px",
  cusror: "pointer",
});
const StyledDotInner = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const StytledDotContent = styled("span")({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  opacity: "0.33",

  transition: "width 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
});

const CardSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShop: 1,
    slidesToScroll: 1,
    accessibility: true,
    appendDots: (dots: any) => (
      <>
        <StyledDots className="test">{dots}</StyledDots>
      </>
    ),
    customPaging: (_i: number) => {
      return (
        <StyledDotItem className="ttt">
          <StyledDotInner>
            <StytledDotContent className="dot" />
          </StyledDotInner>
        </StyledDotItem>
      );
    },
  };
  return (
    <Slider {...settings}>
      <CardItem />
      <CardItem />
    </Slider>
  );
};

export default CardSlider;
