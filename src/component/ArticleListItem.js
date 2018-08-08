import React from "react";

export default props => {
  const { name, onClick, isSelected } = props;
  return (
    <div className={`article-list-item${(isSelected)?' selected':''}`} onClick={onClick}>
      {name}
    </div>
  );
};
