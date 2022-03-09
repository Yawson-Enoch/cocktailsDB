import styled from 'styled-components';

export const CocktailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);

  h1 {
    text-align: center;
  }
`;

export const CocktailsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: var(--gap-xs);
`;
