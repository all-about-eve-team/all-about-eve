import React from "react";

function PeriodPostWrapper(props) {
    console.log(props.posts)
  return (
    <div>
    <ul className="list-group search-results">
      {props.posts.map(post => (
        <li key={post._id} className="list-group-item">
        Title: {post.title}
         -----
         {post.text}
        </li>
      ))}
    </ul>
    <form>Add Comment</form>
    </div>
  );
}

export default PeriodPostWrapper;
