import React from "react";
import Image from "next/image";
import svgbigbeans from "../svg/big-beans.svg";
const BigBeans = (props) => {
  return (
    <Image
      src={svgbigbeans}
      alt="big pile of beans"
      width="100px"
      height="100px"
    />
  );
};
export default BigBeans;
