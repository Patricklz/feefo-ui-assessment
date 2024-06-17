import styled from "styled-components";

export const StatisticSalesUploadCard = styled.div`
background: white;
border-radius: 4px 4px 0 0;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
padding: 1rem;
margin-right: 2rem;
margin-left: 2rem;
margin-bottom: 0.08rem;
display: flex;
flex-direction: column;
`;

export const StatisticContainer = styled.div`
display: flex;
margin-right: 2rem;
margin-left: 2rem;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const StatisticCard = styled.div`
padding: 1rem;
background: white;

margin-right: ${(props) => (props.borderRadius === "left" ? "0.05rem" : "0")};
margin-left: ${(props) => (props.borderRadius === "left" ? "0.05rem" : "0")};


flex-basis: calc(50% - 2rem);
border-radius: ${(props) =>  props.borderRadius === "left" ? "0 0 0px 4px" : props.borderRadius === "right"
    ? "0 0 4px 0px"
    : "0"};
`;