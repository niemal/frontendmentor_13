import styled, { css, keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import { QUERIES } from "../constants";
import Button from "../Button";

export const Wrapper = styled.section`
  position: relative;
  width: clamp(1300px, 8vw, 1400px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.exclusiveWidth1} {
    width: 100%;
    padding: 0px 12px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
    margin-top: -100px;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0px 24px;
  }
`;

const textAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const textInjection = css`
  animation: 1s ${textAppear} ease-in-out forwards;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: start;
  max-width: 444px;

  ${(p) => (p.inView ? textInjection : "")}
  opacity: 0;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    gap: 8px;
    position: relative;
    z-index: 4;
  }
`;

export const TextTitle = styled.h1`
  color: var(--color-dark-blue);
  font-size: ${38 / 16}rem;
  line-height: ${44 / 16}rem;
  font-weight: var(--font-weight-bold);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

export const TextDesc = styled.span`
  color: var(--color-dark-gray-blue);
  font-weight: var(--font-weight-regular);
  max-width: 340px;

  @media ${QUERIES.tabletAndSmaller} {
    align-self: start;
  }

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    max-width: 100%;
    padding: 0px 8px;
  }
`;

const IllustrationContainer = styled.div`
  width: 580px;
  height: 525px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 380px;
    height: 325px;
  }
`;

const IllustrationImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const ButtonContainer = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 32px;
  }
`;

function TopSection() {
  const [textRef, inViewText] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <TextWrapper ref={textRef} inView={inViewText}>
        <TextTitle>Bring everyone together to build better products.</TextTitle>
        <TextDesc>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </TextDesc>
        <ButtonContainer>
          <Button>Get Started</Button>
        </ButtonContainer>
      </TextWrapper>
      <IllustrationContainer>
        <IllustrationImage
          src={"/frontendmentor_13/illustration-intro.svg"}
          alt={"illustration image"}
        />
      </IllustrationContainer>
    </Wrapper>
  );
}

export default TopSection;
