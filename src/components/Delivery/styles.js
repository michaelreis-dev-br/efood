import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Delivery = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${COLORS.SECONDARY};
  }

  .w-50 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${COLORS.SECONDARY};
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${COLORS.SECONDARY};
    background-color: ${COLORS.SECONDARY};

    &.is-valid {
      border: 2px solid green;
    }

    &.is-invalid {
      border: 2px solid red;
    }
  }

  small {
    color: ${COLORS.SECONDARY};
  }

  button {
    color: ${COLORS.PRIMARY};
    font-size: 0.875rem;
    font-weight: 700;
    border: none;
    padding: 4px 0;
    cursor: pointer;
  }
`;
