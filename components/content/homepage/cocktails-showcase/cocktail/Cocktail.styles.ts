import styled from 'styled-components';

export const CocktailWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  box-shadow: 0px 0px 15px ${({ theme }) => theme.tertiaryColor};
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  padding: var(--gap-md);
  border-radius: var(--radius-xs);
  transition: transform var(--transition-3s);

  &:hover {
    transform: translate(-2px, -2px);
  }

  div {
    width: 100%;
    height: 30rem;
    overflow: hidden;
    border-radius: var(--radius-xs);
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  p:nth-of-type(2) {
    opacity: 0.7;
    font-size: var(--fs-xs);
  }

  button {
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-xs);
    background: ${({ theme }) => theme.linksColor};
    color: ${({ theme }) => theme.bgColor};
    border: transparent;
    width: fit-content;
    &:hover {
      background: ${({ theme }) => theme.linksHoverColor};
    }
  }
`;
