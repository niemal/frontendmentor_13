import styled, { css } from "styled-components";
import { hoverSupported } from "../hoverSupported";

const Wrapper = styled.div`
  user-select: none;
  padding: 12px 36px;
  background-color: ${(p) =>
    p.inverse ? "var(--color-very-light-gray)" : "var(--color-bright-red)"};
  border-radius: 36px;
  color: ${(p) =>
    p.inverse ? "var(--color-bright-red)" : "var(--color-very-light-gray)"};
  box-shadow: 0px 2px 6px var(--color-bright-red);
  cursor: pointer;
  font-size: ${14 / 18}rem;
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    background-color: ${(p) =>
      p.inverse ? "var(--color-very-light-gray)" : "var(--color-bright-red)"};
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -42px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
    border-radius: 36px;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  ${hoverSupported(css`
    &:hover {
      color: ${(p) =>
        p.inverse ? "var(--color-very-light-gray)" : "var(--color-bright-red)"};
      background-color: ${(p) =>
        p.inverse ? "var(--color-bright-red)" : "var(--color-very-light-gray)"};
      border-color: ${(p) =>
        p.inverse ? "var(--color-very-light-gray)" : "var(--color-bright-red)"};
    }
  `)}
`;

function Button({ inverse, children, ...props }) {
  return (
    <Wrapper inverse={inverse} {...props}>
      {children}
    </Wrapper>
  );
}

export default Button;
