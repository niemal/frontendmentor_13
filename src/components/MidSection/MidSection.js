import styled, { keyframes, css } from "styled-components";
import { Wrapper, TextWrapper, TextTitle, TextDesc } from "../TopSection";
import { useInView } from "react-intersection-observer";
import { QUERIES } from "../constants";

const MyWrapper = styled(Wrapper)`
  align-items: start;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
    z-index: 3;
    margin-top: 20px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -16px;
    padding-right: 0px;
  }
`;

const MyTextWrapper = styled(TextWrapper)`
  max-width: 550px;
  opacity: 1;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    padding-right: 12px;
  }
`;

export const MyTitle = styled(TextTitle)`
  font-size: ${44 / 16}rem;
  line-height: ${48 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
    line-height: ${44 / 16}rem;
    text-align: center;
    max-width: 300px;
  }
`;

const MyTextDesc = styled(TextDesc)`
  @media ${QUERIES.phoneAndSmaller} {
    line-height: ${34 / 16}rem;
    text-align: center;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: start;
  width: 580px;
  max-width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    padding-left: 8px;
  }
`;

const numberAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const numberInjection = css`
  animation: 1.5s ${numberAppear} ease-in-out forwards;
`;

const Number = styled.div`
  padding: 10px 26px;
  border-radius: 24px;
  color: var(--color-very-light-gray);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-bright-red);

  ${(p) => (p.inView ? numberInjection : "")}
  animation-delay: ${(p) => p.delay}s;
  opacity: 0;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const textAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) translateX(100%);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0%);
  }
`;

const textInjection = css`
  animation: 1.5s ${textAppear} ease-in-out forwards;
`;

const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 8px;

  ${(p) => (p.inView ? textInjection : "")}
  animation-delay: ${(p) => p.delay}s;
  opacity: 0;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 12px;
  }
`;

const InfoTextTitle = styled.h1`
  font-weight: var(--font-weight-bold);
  color: var(--color-dark-blue);

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const InfoTextDesc = styled(TextDesc)`
  width: 450px;
  max-width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    line-height: ${30 / 16}rem;
    font-size: ${14 / 16}rem;
    padding-right: 12px;
  }
`;

const MobileInfoTitleWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
  }
`;

const MobileNumber = styled(Number)`
  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const MobileInfoTextTitle = styled(InfoTextTitle)`
  width: 100%;
  background-color: var(--color-very-pale-red);
  padding: 10px;
  padding-left: 24px;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
    margin-left: -10px;
  }
`;

const MyImage = styled.img`
  object-fit: cover;
  position: absolute;
  width: 814px;
  height: 814px;
  left: -700px;
  bottom: -600px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 390px;
    height: 390px;
    bottom: auto;
    top: -380px;
    left: auto;
    right: -250px;
  }
`;

function MidSection() {
  const [infoRef, inViewInfo] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <MyWrapper>
      <MyImage
        src={"/frontendmentor_13/bg-tablet-pattern.svg"}
        alt={"mid background image"}
      />
      <MyTextWrapper>
        <MyTitle>What's different about Manage?</MyTitle>
        <MyTextDesc>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </MyTextDesc>
      </MyTextWrapper>

      <InfoWrapper ref={infoRef}>
        <InfoContainer>
          <Number inView={inViewInfo} delay={0}>
            01
          </Number>
          <InfoTextWrapper inView={inViewInfo} delay={0}>
            <MobileInfoTitleWrapper>
              <MobileNumber inView={inViewInfo} delay={0}>
                01
              </MobileNumber>
              <MobileInfoTextTitle>
                Track company-wide progress
              </MobileInfoTextTitle>
            </MobileInfoTitleWrapper>
            <InfoTextTitle>Track company-wide progress</InfoTextTitle>
            <InfoTextDesc>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </InfoTextDesc>
          </InfoTextWrapper>
        </InfoContainer>

        <InfoContainer>
          <Number inView={inViewInfo} delay={1.5}>
            02
          </Number>
          <InfoTextWrapper inView={inViewInfo} delay={1.5}>
            <MobileInfoTitleWrapper>
              <MobileNumber inView={inViewInfo} delay={1.5}>
                02
              </MobileNumber>
              <MobileInfoTextTitle>
                Advanced built-in reports
              </MobileInfoTextTitle>
            </MobileInfoTitleWrapper>
            <InfoTextTitle>Advanced built-in reports</InfoTextTitle>
            <InfoTextDesc>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </InfoTextDesc>
          </InfoTextWrapper>
        </InfoContainer>

        <InfoContainer>
          <Number inView={inViewInfo} delay={3}>
            03
          </Number>
          <InfoTextWrapper inView={inViewInfo} delay={3}>
            <MobileInfoTitleWrapper>
              <MobileNumber inView={inViewInfo} delay={3}>
                03
              </MobileNumber>
              <MobileInfoTextTitle>
                Everything you need in one place
              </MobileInfoTextTitle>
            </MobileInfoTitleWrapper>
            <InfoTextTitle>Everything you need in one place</InfoTextTitle>
            <InfoTextDesc>
              Stop jumping from one service to another to communicate, store
              files, track tassk and share documents. Manage offers an
              all-in-one team productivity solution.
            </InfoTextDesc>
          </InfoTextWrapper>
        </InfoContainer>
      </InfoWrapper>
    </MyWrapper>
  );
}

export default MidSection;
