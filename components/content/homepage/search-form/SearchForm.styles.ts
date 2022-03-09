import styled from 'styled-components';

export const Form = styled.form`
  border-radius: var(--radius-xs);
  box-shadow: 0px 0px 15px ${({ theme }) => theme.tertiaryColor};
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  padding: var(--gap-md);
  align-self: center;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);

  label {
    font-size: var(--fs-h2);
  }
`;

export const SearchInput = styled.input<{ valid: boolean }>`
  border-radius: var(--radius-xs);
  border: 2px solid ${({ theme }) => theme.tertiaryColor};
  padding: 0.3rem;
  color: ${({ theme, valid }) => (valid ? theme.errorColor : theme.textColor)};

  &:focus-visible {
    outline: 1px solid
      ${({ theme, valid }) =>
        valid ? theme.errorColor : theme.linksHoverColor};
  }
`;
