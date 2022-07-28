import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  WhyTechWrapper,
  BlueWrapper,
  SliderHeading,
  Heading,
  Box,
  Left,
  ReviewText,
  AvtarReviewWrapper,
  AvtarWrapper,
  AvtarWrap,
  Avtar,
  AvtarDetails,
  Right,
  RatingPoint,
  StarWrapper,
} from "./ReviewSlider.style";
const ReviewSlider = ({ ReviewSliderData }) => {
  // const filePath = window.location.origin + "/images/HireDedicated/";
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
    <>
      <WhyTechWrapper>
        <Container>
          <BlueWrapper className="white">
            <Carousel
              showArrows={false}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={true}
              showStatus={false}
              // animationHandler="fade"
            >
              {ReviewSliderData.reviewLists.avtarLists.map(
                (avtarList, index) => {
                  return (
                    <Box className="top" key={avtarList.id}>
                      <Left className="left">
                        <SliderHeading className="fw400 text-capitalize">
                          {ReviewSliderData.reviewLists.heading}
                        </SliderHeading>
                        <ReviewText className="fw600">
                          {avtarList.review}
                        </ReviewText>
                        <AvtarReviewWrapper className="reviewer common">
                          <Heading className="project_heading subTitleLine">
                            the reviewer
                          </Heading>
                          <AvtarWrapper className="profile">
                            <AvtarWrap className="img">
                              <Avtar className="img_circle">
                                <Image
                                  src={avtarList.img}
                                  alt="ITFirms-Top-App-Developers-USA"
                                  width={130}
                                  height={130}
                                />
                              </Avtar>
                              <AvtarDetails className="nameDetailsWrap">
                                <span className="name fw600">
                                  {avtarList.name}
                                </span>
                                <span
                                  className="name__details"
                                  dangerouslySetInnerHTML={{
                                    __html: avtarList.post,
                                  }}
                                ></span>
                              </AvtarDetails>
                            </AvtarWrap>
                          </AvtarWrapper>
                        </AvtarReviewWrapper>
                      </Left>
                      <Right className="right">
                        <StarWrapper className="d-flex align-items-center">
                          <span>{avtarList.rating}</span>
                          <ul className="d-flex">
                            {[1, 2, 3, 4, 5].map((value, index) => {
                              return (
                                <li key={index}>
                                  <RiStarSFill />
                                </li>
                              );
                            })}
                          </ul>
                        </StarWrapper>
                        <hr />
                        <RatingPoint className="rating_point">
                          <li>
                            Quality: <span>{avtarList.quality}</span>
                          </li>
                          <li>
                            Schedule: <span>{avtarList.schedule}</span>
                          </li>
                          <li>
                            Cost: <span>{avtarList.cost}</span>
                          </li>
                          <li>
                            Willing to refer: <span>{avtarList.refer}</span>
                          </li>
                        </RatingPoint>
                      </Right>
                    </Box>
                  );
                }
              )}
            </Carousel>
            {/* <Swiper
              modules={[EffectFade, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              effect={"fade"}
            >
              {ReviewSliderData.reviewLists.avtarLists.map(
                (avtarList, index) => {
                  return (
                    <SwiperSlide key={avtarList.id}>
                      <Box className="top">
                        <Left className="left">
                          <SliderHeading className="fw400 text-capitalize">
                            {ReviewSliderData.reviewLists.heading}
                          </SliderHeading>
                          <ReviewText className="fw600">
                            {avtarList.review}
                          </ReviewText>
                          <AvtarReviewWrapper className="reviewer common">
                            <Heading className="project_heading subTitleLine">
                              the reviewer
                            </Heading>
                            <AvtarWrapper className="profile">
                              <AvtarWrap className="img">
                                <Avtar className="img_circle">
                                  <Image
                                    src={avtarList.img}
                                    alt="ITFirms-Top-App-Developers-USA"
                                    width={130}
                                    height={130}
                                  />
                                </Avtar>
                                <AvtarDetails className="nameDetailsWrap">
                                  <span className="name fw600">
                                    {avtarList.name}
                                  </span>
                                  <span
                                    className="name__details"
                                    dangerouslySetInnerHTML={{
                                      __html: avtarList.post,
                                    }}
                                  ></span>
                                </AvtarDetails>
                              </AvtarWrap>
                            </AvtarWrapper>
                          </AvtarReviewWrapper>
                        </Left>
                        <Right className="right">
                          <StarWrapper className="d-flex align-items-center">
                            <span>{avtarList.rating}</span>
                            <ul className="d-flex">
                              {[1, 2, 3, 4, 5].map((value, index) => {
                                return (
                                  <li key={index}>
                                    <RiStarSFill />
                                  </li>
                                );
                              })}
                            </ul>
                          </StarWrapper>
                          <hr />
                          <RatingPoint className="rating_point">
                            <li>
                              Quality: <span>{avtarList.quality}</span>
                            </li>
                            <li>
                              Schedule: <span>{avtarList.schedule}</span>
                            </li>
                            <li>
                              Cost: <span>{avtarList.cost}</span>
                            </li>
                            <li>
                              Willing to refer: <span>{avtarList.refer}</span>
                            </li>
                          </RatingPoint>
                        </Right>
                      </Box>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper> */}
          </BlueWrapper>
        </Container>
      </WhyTechWrapper>
    </>
  );
};

export default ReviewSlider;
