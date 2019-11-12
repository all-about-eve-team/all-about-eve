import React from "react";
import PeriodProductImage from "../PeriodProductImage"
import PeriodComment from "../PeriodComment"
import "./style.css"

//need to add state so i can handle the inputs and also the submit button
const PeriodPostWrapper = props => {
  console.log(props.posts)
  return (
    <div className="container">
      {props.posts.map(post => (
        <div className="card">
          <div className="card-header">
            {post.title}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <PeriodProductImage title={post.title} image={post.image} />
              </div>
              <div className="col-sm-8">
                <h5 className="card-title">Comments</h5>
                {/* <PeriodComment comments={post.comments} /> */}
              </div>
              <div class="card-footer text-muted">
                <input className="form-control" type="text" placeholder="Add a comment"></input> <button type="submit" class="btn btn-primary">Add Comment</button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
      )}
export default PeriodPostWrapper;

