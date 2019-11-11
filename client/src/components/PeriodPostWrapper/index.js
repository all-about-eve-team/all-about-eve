import React from "react";

function PeriodPostWrapper(props) {
    console.log(props.posts)
  return (
    <div>
      <ul>
        {props.posts.map(post =>(
          <li>
        <div className="row">
          <div className="col-sm-4">
            <PeriodProductImage image={post.image}/>
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

