import styled from "styled-components";
import { COLORS } from "../../../../assets/styles";

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${COLORS.PRIMARY};
  display: flex;
  flex-direction: column;

  .image {
    background-size: cover;
    height: 217px;
    position: relative;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .tag {
    background-color: ${COLORS.PRIMARY};
    border: none;
    color: ${COLORS.TERTIARY};
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.25rem 0.375rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0.5rem;
  }

  .title-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    color: ${COLORS.PRIMARY};
    font-size: 1.125rem;
  }

  .review {
    align-items: center;
    display: flex;
    gap: 0.2rem;
    justify-content: center;

    svg {
      color: #ffb930;
      fill: #ffb930;
      font-size: 1.25rem;
    }
  }

  p {
    color: ${COLORS.PRIMARY};
    flex-grow: 1;
    font-size: 0.875rem;
    line-height: 22px;
    margin: 1rem 0;
  }

  a {
    background-color: ${COLORS.PRIMARY};
    border: none;
    color: ${COLORS.TERTIARY};

    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.25rem 0.375rem;
    width: fit-content;
  }
`;
