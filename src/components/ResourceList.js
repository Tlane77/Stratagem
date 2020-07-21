import React from "react";
import ResourceItem from './ResourceItem';

const ResourceList = ({ resources, handleResourceSelect }) => {
  const renderedResources = resources.map((resource) => {
      return (
          <ResourceItem
              key={resource.id.resourceId}
              resource={resource}
              handleResourceSelect={handleResourceSelect}/>
            console.log(resource.id);
              
          });

  return <div className="ui relaxed divided list">{renderedResources}</div>;
};
export default ResourceList;