import styled from 'styled-components';
import { ContentWrapper } from '../../../store/ui/ContentWrapper';

export const ErrorPageWrapper = styled.main`
  ${ContentWrapper}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-md);
  color: var(--error);

  button {
    background-color: var(--error);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.bgColor};

    &:hover {
      opacity: 0.9;
    }
  }
`;
