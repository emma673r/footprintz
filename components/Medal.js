import React from "react";
import Image from "next/image";
import svgmedal from "../svg/new-medal.svg";
const Medal = (props) => {
  return (
    <Image
      className="medal"
      src={svgmedal}
      alt="medal"
      width="100px"
      height="100px"
    />
  );
};
export default Medal;
