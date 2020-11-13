import React from "react";

function Image(props) {
  const { src, title } = props;
  return (
    <div className="img">
      <img src={src} alt={title} />
    </div>
  );
}

export default Image;
