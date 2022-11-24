import React from "react";
import Image from "next/image";
import svgicecream from "../svg/icecream.svg";
const Icecream = (props) => {
  return (
    <Image
      className="icecream"
      src={svgicecream}
      alt="icecream"
      width="100px"
      height="100px"
    />
  );
};
export default Icecream;
