import React from "react";

function PeriodPostWrapper(props) {
    console.log("period post wrapper is getting hit")
    console.log(props.posts)
  return (
    <ul className="list-group search-results">
      {props.posts.map(post => (
        <li key={post._id} className="list-group-item">
         Author: {post.author}
         {post.title}
         -----
         {post.text}
        </li>
      ))}
    </ul>
  );
}

export default PeriodPostWrapper;
