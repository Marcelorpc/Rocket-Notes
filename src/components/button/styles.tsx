import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 5.6em;
  border: 0;
  padding: 0 1.6em;
  margin-top: 1.6em;
  border-radius: 1em;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;