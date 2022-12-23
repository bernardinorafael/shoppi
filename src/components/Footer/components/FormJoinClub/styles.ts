import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLORS.primary[1200]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;

  strong {
    display: block;
    font-size: 1.5rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 3rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.COLORS.primary[1200]};
  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.COLORS.secondary[700]};
  border: none;
  outline: none;
  border-radius: 2px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.secondary[200]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.secondary[400]};
  }
`;

export const ButtonJoinNewsLetter = styled.button`
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.COLORS.secondary[500]};
  color: ${({ theme }) => theme.COLORS.primary[1200]};
  font-size: 1rem;
  font-weight: 600;
  height: 3rem;
  outline: none;

  &:active {
    transform: scale(1.05);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.secondary[400]};
    border: 1px solid transparent !important;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.secondary[300]};
    transition: border-color 200ms;
  }
`;
