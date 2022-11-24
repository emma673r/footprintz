import React from "react";
import Image from "next/image";
import svgavgbeans from "../svg/medium-beans.svg";
const AverageBeans = (props) => {
  return (
    <Image
      src={svgavgbeans}
      alt="Average pile of beans"
      width="100px"
      height="100px"
    />
  );
};
export default AverageBeans;
