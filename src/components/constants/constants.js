export const COLORS = {
  bright_red: "hsl(12, 88%, 59%)",
  dark_blue: "hsl(228, 39%, 23%)",
  dark_gray_blue: "hsl(227, 12%, 61%)",
  very_dark_blue: "hsl(233, 12%, 13%)",
  very_dark_blue_faded: "hsla(233, 12%, 13%, 0.7)",
  very_pale_red: "hsl(13, 100%, 96%)",
  very_light_gray: "hsl(0, 0%, 98%)",
  very_light_gray_faded: "hsla(0, 0%, 98%, 0.7)",
  white: "hsl(0, 0%, 100%)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1320,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};
