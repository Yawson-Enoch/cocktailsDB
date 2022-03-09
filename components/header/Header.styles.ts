import styled from 'styled-components';
import { ContentWrapper } from '../../store/ui/ContentWrapper';

export const HeaderWrapper = styled.header`
  box-shadow: 0px 5px 15px ${({ theme }) => theme.tertiaryColor};
  border-bottom: 2px solid ${({ theme }) => theme.tertiaryColor};
`;

export const HeaderContent = styled.div`
  ${ContentWrapper};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: var(--gap-md) 0;
  gap: var(--gap-md);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  p {
    font-size: var(--fs-h2);
    width: fit-content;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.linksColor},
      ${({ theme }) => theme.secondaryColor}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    padding: 0.3rem;
  }
`;
export const NavLinks = styled.ul`
  display: flex;

  a {
    padding: var(--gap-xs) var(--gap-md);
    color: ${({ theme }) => theme.linksColor};

    &:active {
      color: ${({ theme }) => theme.linksHoverColor};
      background: ${({ theme }) => theme.tertiaryColor};
      border-radius: var(--radius-xs);
    }

    @media (hover) {
      &:hover {
        color: ${({ theme }) => theme.linksHoverColor};
        background: ${({ theme }) => theme.tertiaryColor};
        border-radius: var(--radius-md);
      }
    }
  }
`;
