import React from "react";

export default props => {
  const { text, onClick, disabled } = props;
  return <button className="my-button" disabled={!!disabled} onClick={onClick}>{text}</button>;
};
