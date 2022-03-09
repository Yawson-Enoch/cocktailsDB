import styled from 'styled-components';
import { ContentWrapper } from '../../store/ui/ContentWrapper';

export const FooterWrapper = styled.header`
  box-shadow: 0px -5px 15px ${({ theme }) => theme.tertiaryColor};
  border-top: 2px solid ${({ theme }) => theme.tertiaryColor};
`;

export const FooterContent = styled.div`
  ${ContentWrapper};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--gap-md) 0;
`;
