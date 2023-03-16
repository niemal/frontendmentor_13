import styled, { css } from "styled-components";
import { Wrapper } from "../TopSection";
import { Logo } from "../NavBar";
import Button from "../Button";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";
import { useRef } from "react";

const MyWrapper = styled.div`
  min-height: 250px;
  background-color: var(--color-very-dark-blue);
  width: 100%;
  margin-top: -120px;
  padding-bottom: 100px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: 40px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    min-height: 450px;
  }
`;

const Container = styled(Wrapper)`
  padding-top: 72px;
  align-items: start;
  min-height: 100%;
  min-height: 200px;

  @media ${QUERIES.exclusiveWidth1} {
    padding-right: 12px;
    padding-left: 12px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 0px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    padding: 40px 12px;
    padding-bottom: 0px;
  }
`;

const SocialAndLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 115px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 16px;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -12px;
    gap: 32px;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
`;

const SocialImage = styled.img`
  object-fit: cover;
  width: 20px;
  height: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 30px;
    height: 30px;
  }
`;

const TwinTabletLinksWrapper = styled.div`
  display: none;
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    gap: 100px;
    justify-content: center;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const TabletLinksWrapper = styled(LinksWrapper)`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    align-items: space-between;
    min-width: 200px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    min-width: auto;
    width: max-content;
    gap: 16px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-very-light-gray);
  font-weight: var(--font-weight-medium);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-bright-red);
    }
  `)}

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    font-weight: var(--font-weight-regular);
  }
`;

const CopyrightsWrapper = styled(SocialAndLogoWrapper)`
  align-items: end;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  padding: 16px;
  border-radius: 36px;
  background-color: var(--color-very-light-gray);
  color: var(--color-dark-blue);
  font-size: ${15 / 16}rem;

  &::placeholder {
    color: var(--color-dark-gray-blue);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 12px 24px;
  }
`;

const Copyright = styled.span`
  color: var(--color-dark-gray-blue);
  font-weight: var(--font-weight-regular);
  margin-top: 88px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 24px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 0px;
    font-size: ${12 / 16}rem;
  }
`;

const LogoContainer = styled.div`
  width: 144px;
  height: 26px;
`;

function Footer() {
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);

  return (
    <MyWrapper>
      <Container>
        <SocialAndLogoWrapper>
          <LogoContainer>
            <Logo
              src={"/frontendmentor_13/logo_footer.svg"}
              alt={"footer logo image"}
            />
          </LogoContainer>

          <SocialsWrapper>
            <SocialLink href={"/"}>
              <SocialImage
                src={"/frontendmentor_13/icon-facebook.svg"}
                alt={"facebook image"}
              />
            </SocialLink>
            <SocialLink href={"/"}>
              <SocialImage
                src={"/frontendmentor_13/icon-youtube.svg"}
                alt={"youtube image"}
              />
            </SocialLink>
            <SocialLink href={"/"}>
              <SocialImage
                src={"/frontendmentor_13/icon-twitter.svg"}
                alt={"twitter image"}
              />
            </SocialLink>
            <SocialLink href={"/"}>
              <SocialImage
                src={"/frontendmentor_13/icon-pinterest.svg"}
                alt={"pinterest image"}
              />
            </SocialLink>
            <SocialLink href={"/"}>
              <SocialImage
                src={"/frontendmentor_13/icon-instagram.svg"}
                alt={"instagram image"}
              />
            </SocialLink>
          </SocialsWrapper>
        </SocialAndLogoWrapper>

        <LinksWrapper style={{ marginLeft: "-32px" }}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>About Us</Link>
        </LinksWrapper>

        <LinksWrapper>
          <Link href={"/"}>Careers</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Privacy Policy</Link>
        </LinksWrapper>

        <CopyrightsWrapper>
          <InputWrapper>
            <Input ref={inputRefOne} placeholder={"Updates in your inbox..."} />
            <Button
              onClick={() => {
                if (inputRefOne.current.value?.length === 0) {
                  alert("field cannot be empty!");
                } else if (
                  !inputRefOne.current.value.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  )
                ) {
                  alert("invalid e-mail format!");
                }
              }}
            >
              Go
            </Button>
          </InputWrapper>

          <TwinTabletLinksWrapper>
            <TabletLinksWrapper>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Pricing</Link>
              <Link href={"/"}>Products</Link>
              <Link href={"/"}>About Us</Link>
            </TabletLinksWrapper>
            <TabletLinksWrapper>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Community</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </TabletLinksWrapper>
          </TwinTabletLinksWrapper>
          <Copyright>Copyright 2020. All Rights Reserved</Copyright>
        </CopyrightsWrapper>
      </Container>

      <MobileContainer>
        <InputWrapper>
          <Input ref={inputRefTwo} placeholder={"Updates in your inbox..."} />
          <Button
            onClick={() => {
              if (inputRefTwo.current.value?.length === 0) {
                alert("field cannot be empty!");
              }
              if (
                !inputRefTwo.current.value.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                )
              ) {
                alert("invalid e-mail format!");
              }
            }}
          >
            GO
          </Button>
        </InputWrapper>

        <TwinTabletLinksWrapper>
          <TabletLinksWrapper>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Products</Link>
            <Link href={"/"}>About Us</Link>
          </TabletLinksWrapper>
          <TabletLinksWrapper>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>Community</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </TabletLinksWrapper>
        </TwinTabletLinksWrapper>

        <SocialsWrapper>
          <SocialLink href={"/"}>
            <SocialImage
              src={"/frontendmentor_13/icon-facebook.svg"}
              alt={"facebook image"}
            />
          </SocialLink>
          <SocialLink href={"/"}>
            <SocialImage
              src={"/frontendmentor_13/icon-youtube.svg"}
              alt={"youtube image"}
            />
          </SocialLink>
          <SocialLink href={"/"}>
            <SocialImage
              src={"/frontendmentor_13/icon-twitter.svg"}
              alt={"twitter image"}
            />
          </SocialLink>
          <SocialLink href={"/"}>
            <SocialImage
              src={"/frontendmentor_13/icon-pinterest.svg"}
              alt={"pinterest image"}
            />
          </SocialLink>
          <SocialLink href={"/"}>
            <SocialImage
              src={"/frontendmentor_13/icon-instagram.svg"}
              alt={"instagram image"}
            />
          </SocialLink>
        </SocialsWrapper>

        <LogoContainer>
          <Logo
            src={"/frontendmentor_13/logo_footer.svg"}
            alt={"footer logo image"}
          />
        </LogoContainer>

        <Copyright>Copyright 2020. All Rights Reserved</Copyright>
      </MobileContainer>
    </MyWrapper>
  );
}

export default Footer;
