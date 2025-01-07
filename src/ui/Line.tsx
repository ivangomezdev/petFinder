import React from "react";

type Props = {
  size?: string;
  color?: string;
};

const Line = (props: Props) => {
  return (
    <span
      style={{ border: `solid 1px ${props.color}`, width: `${props.size}px` ,margin:"20px 25px" }}
    />
  );
};

export default Line;
