import React from "react";
import Image from "next/image";
import svgbook from "../svg/new-book.svg";
const Book = (props) => {
  return (
    <Image
      className="book"
      src={svgbook}
      alt="book"
      width="100px"
      height="100px"
    />
  );
};
export default Book;
