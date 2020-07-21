import React from "react";

const ResourceItem = ({ resource, handleResourceSelect }) => {
  return (
    <div onClick={() => handleResourceSelect(resource)} className=" resource-item item">
      <img
        className="ui image"
        src={resource.url}
        alt={resource.description}
      />
      <div className="content">
        <div className="header ">{resource.snippet.title}</div>
      </div>
    </div>
  );
};
export default ResourceItem;