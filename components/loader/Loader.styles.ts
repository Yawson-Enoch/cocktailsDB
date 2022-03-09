import styled from 'styled-components';

export const Spinner = styled.div`
  align-self: center;
  width: 10rem;
  height: 10rem;
  border-radius: var(--radius-round);
  border-top: 2px solid ${({ theme }) => theme.linksColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spinner 0.5s linear infinite;

  &::before {
    content: '';
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: var(--radius-round);
    border-left: 2px dashed ${({ theme }) => theme.secondaryColor};
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
