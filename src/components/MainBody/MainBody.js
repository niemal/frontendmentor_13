import styled from "styled-components";
import NavBar from "../NavBar";
import TopSection from "../TopSection";
import MidSection from "../MidSection";
import BottomSection from "../BottomSection";
import FooterFiller from "../FooterFiller";
import Footer from "../Footer";
import { QUERIES } from "../constants";

const Wrapper = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  object-fit: cover;
  position: absolute;
  right: 60px;
  top: -160px;
  width: 814px;
  height: 814px;

  @media ${QUERIES.tabletAndSmaller} {
    right: -160px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 390px;
    height: 390px;
    top: -40px;
    right: -48px;
  }
`;

function MainBody() {
  return (
    <Wrapper role={"main"}>
      <BackgroundImage
        src={"/frontendmentor_13/bg-tablet-pattern.svg"}
        alt={"main background image"}
      />
      <NavBar />
      <TopSection />
      <MidSection />
      <BottomSection />
      <FooterFiller />
      <Footer />
    </Wrapper>
  );
}

export default MainBody;
