import styled from "styled-components";

export const InfoTitle = styled.span`
  color: #afaeac;
  text-transform: uppercase;
  margin: 0.5rem;
  font-weight: 500;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoIconContainer = styled.div`
  background: #ffcf24;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  color: #3e3d3c;
`;

export const InfoName = styled.div`
  display: flex;
  color: #626160;
  font-weight: bold;
  margin-bottom: 0.2rem;
  margin-left: 0.5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoDetailsContainer = styled.section`
  align-items: flex-start;
  flex-direction: column;
`;

export const InfoEmailIcon = styled.span`
  margin-right: 0.5rem;
`;

export const InfoDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: #7f7e7a;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;