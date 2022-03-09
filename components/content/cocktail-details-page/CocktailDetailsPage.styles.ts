import styled from 'styled-components';
import { ContentWrapper } from '../../../store/ui/ContentWrapper';

export const CocktailDetailsWrapper = styled.main`
  ${ContentWrapper}
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  justify-content: center;
  align-items: center;
`;

export const CocktailDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  div {
    height: 30rem;
    overflow: hidden;
    border-radius: var(--radius-xs);

    @media (min-width: 768px) {
      min-width: 30rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CocktailDetailsList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);

  li {
    display: flex;
    gap: var(--gap-xs);

    p:first-child {
      height: fit-content;
      background-color: ${({ theme }) => theme.textColor};
      color: ${({ theme }) => theme.bgColor};
      padding: var(--gap-xs);
      border-radius: var(--radius-xs);
      text-transform: capitalize;
    }
  }
`;
