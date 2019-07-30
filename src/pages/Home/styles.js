import styled from "styled-components";

import bkg from "../../assets/img/star-bkg.png";

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${bkg});
  background-attachment: fixed;
  background-position: center center;
  background-clip: border-box;
  background-origin: border-box;
  background-size: content;
`;

export const Logo = styled.img`
  width: 75%;
`;

export const Button = styled.a`
  font-size: 1.25rem !important;
  width: 75%;
`;
