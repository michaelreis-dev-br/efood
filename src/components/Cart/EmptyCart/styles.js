import styled from "styled-components";

export const EmptyCart = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-weight: 900;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
  }

  img {
    width: 100%;
    max-width: 300px;
  }
`;
