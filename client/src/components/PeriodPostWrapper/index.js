import React from "react";
import PeriodProductImage from "../PeriodProductImage"
import PeriodComment from "../PeriodComment"
import "./style.css"


const PeriodPostWrapper = props => {
    console.log(props.posts)
  return (
    <div className="container">
    {props.posts.map(post =>(
<div className="card">
  <div className="card-header">
    {post.title}
  </div>
  <div className="card-body">
    <h5 className="card-title">Comments</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <PeriodProductImage title={post.title} image={post.image}/>
</div>
))}
</div>

    // <div className="container">
    //   <ul>
    //     {props.posts.map(post =>(
    //       <li>
    //     <div className="row">
    //       <div className="col-sm-4">
    //         <PeriodProductImage title={post.title} image={post.image}/>
    //       </div>
    //       <div className="col-sm-8">
    //         {post.title}
    //       </div>
    //       </div>
    //       <div class="row">
    //         Comments
    //         {/* comments are gonna get squirrelly */}
    //         {/* <PeriodComment comments={post.comments}/> */}
    //       </div>
    //       </li>
    //       ))}
         
    //   </ul>
    // </div>
    
  );
}

export default PeriodPostWrapper;

