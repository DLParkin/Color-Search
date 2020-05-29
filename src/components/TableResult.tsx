import React from "react";
import { ColorCell } from "./ColorCell";
import { Color } from "../_helpers/types";

type IProps = {
  item: Color;
};

export const TableResult: React.FC<IProps> = ({ item }) => {
  return (
    <>
      <tr>
        <td style={{ border: "none" }}>
          <ColorCell color={item.hex} />
        </td>
        <td>{item.color}</td>
        <td>{item.hex.toUpperCase()}</td>
        <td>{item.rgb}</td>
        <td>{item.cmyk}</td>
      </tr>
    </>
  );
};
