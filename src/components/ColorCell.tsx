import React from "react";

type IProps = {
  color: string;
};

export const ColorCell: React.FC<IProps> = ({ color }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: color, minHeight: "35px" }}
    />
  );
};
