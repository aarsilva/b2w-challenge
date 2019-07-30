import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: #fabe06;
  font-size: 1.25rem;
`;

export const Dot = styled.div`
  background-color: #fabe06;
  border-radius: 50%;
  width: 3.5px;
  height: 3.5px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.65s linear infinite;
  animation-delay: ${props => props.delay};
`;
