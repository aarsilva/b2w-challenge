import React from "react";

import { DotWrapper, Dot } from "./styles";

export default function Loading() {
  return (
    <DotWrapper>
      Calculating the jumps for the next planet
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
}
