import styled from "styled-components";
import { MyTitle } from "../MidSection";
import Button from "../Button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { QUERIES } from "../constants";
import { useState } from "react";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  overflow: hidden;
  z-index: 2;
  padding-bottom: 200px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: 60px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -60px;
  }
`;

const Testimonials = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  /* gap: 32px; */
  padding-top: 32px;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  padding-top: 0px;
  gap: 16px;
  background-color: var(--color-very-light-gray);
  width: 544px;
  max-width: 544px;
  overflow: visible !important;
  cursor: grab;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin-top: -32px;
`;

const Name = styled.span`
  color: var(--color-dark-blue);
  font-weight: var(--font-weight-bold);
`;

const Desc = styled.span`
  color: var(--color-dark-gray-blue);
  font-weight: var(--font-weight-regular);
  width: 100%;
`;

const MobileDotsWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 4px;
    margin-top: -48px;
  }
`;

const MobileDot = styled.div`
  border: 1px solid var(--color-bright-red);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.active ? "var(--color-bright-red)" : "transparent"};
  transition: all 0.3s ease-in-out;
`;

const animation = { duration: 26000, easing: (t) => t };

function BottomSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const settings = {
    loop: true,
    renderMode: "precision",
    drag: true,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 32,
    },
    breakpoints: {},
    created(s) {
      setLoaded(true);
      s.moveToIdx(3, true, animation);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  };
  settings.breakpoints[QUERIES.tabletAndSmaller] = {
    slides: {
      origin: "center",
      perView: 2,
      spacing: 24,
    },
  };
  settings.breakpoints[QUERIES.tabletAndSmaller] = {
    slides: {
      origin: "center",
      perView: 1,
      spacing: 12,
    },
  };
  const [sliderRef, instanceRef] = useKeenSlider(settings);

  return (
    <Wrapper>
      <MyTitle>What they've said</MyTitle>

      <Testimonials ref={sliderRef} className={"keen-slider"}>
        <TestimonialWrapper className={"keen-slider__slide"}>
          <Avatar
            src={"/frontendmentor_13/avatar-anisha.png"}
            alt={"anisha's avatar image"}
          />
          <Name>Anisha Li</Name>
          <Desc>
            "Manage has supercharged our team's workflow. The ability tomaintain
            visibility on larger milestones at all times keeps everyone
            motivated."
          </Desc>
        </TestimonialWrapper>

        <TestimonialWrapper className={"keen-slider__slide"}>
          <Avatar
            src={"/frontendmentor_13/avatar-ali.png"}
            alt={"ali's avatar image"}
          />
          <Name>Ali Bravo</Name>
          <Desc>
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused."
          </Desc>
        </TestimonialWrapper>

        <TestimonialWrapper className={"keen-slider__slide"}>
          <Avatar
            src={"/frontendmentor_13/avatar-richard.png"}
            alt={"richard's avatar image"}
          />
          <Name>Richard Watts</Name>
          <Desc>
            "Manage allows us to provide structure and process. It keeps us
            organized and focused. I can't stop recommending them to everyone I
            talk to!"
          </Desc>
        </TestimonialWrapper>

        <TestimonialWrapper className={"keen-slider__slide"}>
          <Avatar
            src={"/frontendmentor_13/avatar-shanai.png"}
            alt={"shanai's avatar image"}
          />
          <Name>Shanai Gough</Name>
          <Desc>
            "Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive."
          </Desc>
        </TestimonialWrapper>
      </Testimonials>

      {loaded && instanceRef.current && (
        <MobileDotsWrapper>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <MobileDot
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              active={currentSlide === idx}
            />
          ))}
        </MobileDotsWrapper>
      )}

      <Button>Get Started</Button>
    </Wrapper>
  );
}

export default BottomSection;
