import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  // colors
  // blue
  --blue-100: #ccccff;
  --blue-200: #9999ff;
  --blue-300: #6666ff;
  --blue-400: #3333ff;
  --blue-500: #0000ff;
  --blue-600: #0000cc;
  --blue-700: #000099;
  --blue-800: #000066;
  --blue-900: #000033;

  // orange
  --orange-100: #ffedcc;
  --orange-200: #ffdb99;
  --orange-300: #ffc966;
  --orange-400: #ffb733;
  --orange-500: #ffa500;
  --orange-600: #cc8400;
  --orange-700: #996300;
  --orange-800: #664200;
  --orange-900: #332100;

  // grey
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;

  // rest of the colors
  --black: #000000;
  --white: #ffffff;
  --error: #842029;
  --success: #0f5132;

  // fonts
  --ff-heading: 'Poppins', sans-serif;
  --ff-body: 'PT Serif', serif;

  --fs-h1: clamp(2.7rem, 2.5rem + 2.5vw, 3.2rem);
  --fs-h2: clamp(2rem, 1.8rem + 1.8vw, 2.5rem);
  --fs-p: clamp(1.5rem, 1.1rem + 1.1vw, 1.8rem);
  --fs-xs: clamp(0.8rem, 1rem + 1vw, 1.1rem);

  // page-specific variables
  --clr-bg: var(--grey-100);
  --clr-text: var(--grey-800);
  --radius-xs: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-round: 50%;
  --gap-xs: var(--fs-xs);
  --gap-md: var(--fs-p);
  --gap-lg: var(--fs-h1);
  --max-width: 1024px;
  --transition-3s: 0.3s ease-in-out;
  --transition-5s: 0.5s ease-in-out;
}

html {
  font-size: 62.5%;
  scroll-padding-top: 2rem;

  &:focus-within {
    scroll-behavior: smooth;
  }

  @media (max-width: 300px) {
    font-size: 50%;
  }

  @media (max-width: 150px) {
    font-size: 30%;
  }
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: none;
  border: none;
}

:focus-visible {
  outline: 1px solid var(--blue-500);
}

body {
  font-family: var(--ff-body);
  font-size: var(--fs-p);
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  min-height: 100vh;
  overflow-x: hidden;
  gap: var(--gap-lg);
}

p {
  line-height: 1.2;
}

:where(h1, h2, h3, h4, h5, h6) {
  font-family: var(--ff-heading);
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
}

:where(input, textarea, select, label, button) {
  display: block;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

img,
picture {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  display: block;
  text-decoration: none;
}

h1 {
  font-size: var(--fs-h1);
}

h2 {
  font-size: var(--fs-h2);
}

p,
a {
  font-size: var(--fs-p);
}
`;
