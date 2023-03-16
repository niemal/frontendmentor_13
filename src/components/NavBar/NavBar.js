import styled, { keyframes, css } from "styled-components";
import Button from "../Button/Button";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";
import { useState } from "react";

const Wrapper = styled.div`
  width: clamp(1300px, 8vw, 1400px);
  margin: 0 auto;
  padding: 36px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 88;

  @media ${QUERIES.exclusiveWidth1} {
    width: 100%;
    padding: 36px 12px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 36px 24px;
  }
`;

const LogoWrapper = styled.div`
  width: 146px;
  height: 24px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100px;
    height: 16px;
    z-index: 89;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavEntry = styled.a`
  text-decoration: none;
  font-size: ${14 / 18}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-dark-blue);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-bright-red);
    }
  `)}
`;

const ButtonWrapper = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const iconAnim = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const HamburgerIconWrapper = styled.div`
  width: 25px;
  height: 18px;
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
    z-index: 99;
    animation: 0.25s ${iconAnim} ease-in-out forwards;
  }
`;

const menuBackgroundSlide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(130%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(
    180deg,
    var(--color-very-light-gray-faded) 5%,
    var(--color-very-dark-blue-faded) 100%
  );
  animation: 0.45s ${menuBackgroundSlide} ease-in-out forwards;
  z-index: 88;
`;

const menuZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const MobileNavWrapper = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  align-items: center;
  background-color: var(--color-white);
  width: 85%;
  border-radius: 8px;
  animation: 0.45s ${menuZoom} ease-in-out forwards;
  animation-delay: 0.25s;
  opacity: 0;
`;

const MobileNavEntry = styled(NavEntry)`
  font-size: ${16 / 16}rem;
  font-weight: var(--font-weight-bold);
`;

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={"/frontendmentor_13/logo.svg"} alt={"logo image"} />
      </LogoWrapper>

      <NavWrapper>
        <NavEntry href={"/"}>Pricing</NavEntry>
        <NavEntry href={"/"}>Product</NavEntry>
        <NavEntry href={"/"}>About Us</NavEntry>
        <NavEntry href={"/"}>Careers</NavEntry>
        <NavEntry href={"/"}>Community</NavEntry>
      </NavWrapper>

      <ButtonWrapper>
        <Button>Get Started</Button>
      </ButtonWrapper>

      {!open ? (
        <HamburgerIconWrapper
          onClick={() => {
            setOpen(true);
          }}
        >
          <Logo
            src={"/frontendmentor_13/icon-hamburger.svg"}
            alt={"hamburger icon image"}
          />
        </HamburgerIconWrapper>
      ) : (
        ""
      )}
      {open ? (
        <>
          <MenuWrapper>
            <MobileNavWrapper>
              <MobileNavEntry href={"/"}>Pricing</MobileNavEntry>
              <MobileNavEntry href={"/"}>Product</MobileNavEntry>
              <MobileNavEntry href={"/"}>About Us</MobileNavEntry>
              <MobileNavEntry href={"/"}>Careers</MobileNavEntry>
              <MobileNavEntry href={"/"}>Community</MobileNavEntry>
            </MobileNavWrapper>
          </MenuWrapper>
          <HamburgerIconWrapper
            onClick={() => {
              setOpen(false);
            }}
          >
            <Logo
              src={"/frontendmentor_13/icon-close.svg"}
              alt={"hamburger icon image"}
            />
          </HamburgerIconWrapper>
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default NavBar;
