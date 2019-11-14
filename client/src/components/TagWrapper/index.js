import React from "react";
import "./style.css";


function TagWrapper(props) {
  //GGRE--> For debugging only
  console.log("props.tags--> ", props.tags);
  return (
    <div className="list-tags">
      <h3>Just to see if it works!</h3>
      <br></br>
      <ul className="list-tag-name">
        {props.tags.map(tag => (
          <li key={tag.name} className="list-tag-name">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagWrapper;
