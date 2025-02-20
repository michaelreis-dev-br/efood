import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Purchase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: space-between;

  .input-container {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr;
  }

  .w-75 {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 3fr 1fr;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h2 {
    color: ${COLORS.SECONDARY};
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .w-50 {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }

  label {
    color: ${COLORS.SECONDARY};
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  input {
    background-color: ${COLORS.SECONDARY};
    border: 1px solid ${COLORS.SECONDARY};
    padding: 0.5rem;
    width: 100%;

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
    border: none;
    color: ${COLORS.PRIMARY};
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 4px 0;
  }
`;
