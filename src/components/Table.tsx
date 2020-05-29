import React from "react";
import { Color } from "../_helpers/types";
import { TableResult } from "./TableResult";

type IProps = {
  data: Array<Color>;
};

const Table: React.FC<IProps> = ({ data }) => {
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th>Color</th>
          <th>Name</th>
          <th>Hex</th>
          <th>RGB</th>
          <th>CMYK</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, idx) => <TableResult key={idx} item={item} />)}
      </tbody>
    </table>
  );
};
export default Table;
