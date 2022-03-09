import styled from 'styled-components';
import { ContentWrapper } from '../../../store/ui/ContentWrapper';

export const AboutPageWrapper = styled.main`
  ${ContentWrapper}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-md);
`;
