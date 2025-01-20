import React from "react";

const Corner = ({clases}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`${clases}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 32L0 0L32 0C14.3269 0 0 14.3269 0 32Z"
      ></path>
    </svg>
  );
};

export default Corner;