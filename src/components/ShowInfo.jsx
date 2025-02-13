import React from "react";
import { useSelector } from "react-redux";

function ShowInfo() {
  const { info } = useSelector((state) => state.productStore);
  return <div>{info && info}</div>;
}

export default ShowInfo;
