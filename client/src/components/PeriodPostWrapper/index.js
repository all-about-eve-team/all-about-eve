import React from "react";
import PeriodProductImage from "./PeriodProductImage"
import PeriodComment from "./PeriodComment"

function PeriodPostWrapper(props) {
    console.log(props.posts)
  return (
    <div>
      <ul>
        {props.posts.map(post =>(
          <li>
        <div className="row">
          <div className="col-sm-4">
            <PeriodProductImage title={post.title} image={post.image}/>
          </div>
          <div className="col-sm-8">
            {post.title}
          </div>
          </div>
          <div class="row">
            {/* comments are gonna get squirrelly */}
            <PeriodComment comments={post.comments}/>
          </div>
          </li>
          ))}
         
      </ul>
    </div>
    
  );
}

export default PeriodPostWrapper;

