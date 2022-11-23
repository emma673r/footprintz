import React from "react";
import Image from "next/image";
import svgsinglebean from "../svg/single-bean.svg";
const SingleBean = (props) => {
  return (
    <Image src={svgsinglebean} alt="single bean" width="100px" height="100px" />
  );
};
export default SingleBean;
