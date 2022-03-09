import styled from 'styled-components';
import { ContentWrapper } from '../../../store/ui/ContentWrapper';

export const HomePageWrapper = styled.main`
  ${ContentWrapper}
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;
