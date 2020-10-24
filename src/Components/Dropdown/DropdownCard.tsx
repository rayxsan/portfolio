import React, { FunctionComponent } from "react";
import Card from "../UI/Card/Card";

interface Props {
  data: Object[];
}

const DropdownCard: FunctionComponent<Props> = ({ data }) => {
  return (
    <Card title="">
      <ul>
        {data.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </Card>
  );
};

export default DropdownCard;
