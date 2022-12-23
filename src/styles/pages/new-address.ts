import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  padding: 2rem 1rem;

  > div:nth-child(2) {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.725rem;
      font-weight: 500;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 700;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 0.225rem;
    }

    span {
      font-weight: 700;
      font-size: 0.725rem;
      color: ${({ theme }) => theme.COLORS.red[200]};
    }
  }
`;

type InputProps = {
  error: boolean;
};

export const Input = styled.input<InputProps>`
  border-radius: 2px;
  height: 2.5rem;
  padding: 0 0.875rem;
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
  font-weight: 600;
  outline: none;

  &:focus::-webkit-input-placeholder {
    color: transparent;
    transition: color 200ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.secondary[100]};
  }

  &::placeholder {
    font-weight: 400;
  }

  ${({ error }) =>
    error === true &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme.COLORS.red[200]} !important;

      &:focus {
        box-shadow: none;
      }
    `}
`;

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

export const ButtonCreateNewAddress = styled.button`
  height: 3rem;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  background-color: transparent;
  position: relative;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};

  &:active {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[400]};
    transition: border-color 200ms;
  }

  svg {
    animation: ${spinnerLoading} 1s ease-in-out infinite;
    position: absolute;
    left: 10px;
  }
`;
