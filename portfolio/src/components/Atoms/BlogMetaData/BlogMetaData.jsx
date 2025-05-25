import React from "react";

const BlogMetaData = ({icon, text}) => {
  return (
    <div className="BlogCardsContainerRightBottomDuration">
      <img src={icon} alt={icon} />
      <p>{text}</p>
    </div>
  );
};

export default BlogMetaData;
