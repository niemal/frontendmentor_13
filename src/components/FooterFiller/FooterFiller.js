import styled from "styled-components";
import { Wrapper } from "../TopSection";
import Button from "../Button";
import { QUERIES } from "../constants";

const MyWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: var(--color-bright-red);
  position: relative;
  margin-top: -120px;
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    min-height: 370px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 1439px;
  height: 360px;
  position: absolute;
  left: 20%;
  top: -140px;

  @media ${QUERIES.phoneAndSmaller} {
    top: 40px;
    left: -350px;
  }
`;

const Container = styled(Wrapper)`
  padding-top: 64px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: row;
    margin-top: 0px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    padding-top: 80px;
  }
`;

const Text = styled.h1`
  font-size: ${36 / 16}rem;
  line-height: ${40 / 16}rem;
  color: var(--color-very-light-gray);
  max-width: 450px;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    max-width: 320px;
  }
`;

function FooterFiller() {
  return (
    <MyWrapper>
      <Image
        src={"/frontendmentor_13/bg-simplify-section-desktop.svg"}
        alt={"footer filler image background"}
      />
      <Container>
        <Text>Simplify how your team works today.</Text>
        <Button inverse={true}>Get Started</Button>
      </Container>
    </MyWrapper>
  );
}

export default FooterFiller;
