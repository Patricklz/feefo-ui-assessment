import styled from "styled-components";

export const ContactContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #464543;
  font-weight: 400;
`;