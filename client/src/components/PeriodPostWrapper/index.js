import React, {Component} from "react";
import PeriodProductImage from "../PeriodProductImage"
import PeriodComment from "../PeriodComment"
import "./style.css"
import API from "../../utils/API"

//need to add state so i can handle the inputs and also the submit button
class PeriodPostWrapper extends Component {
  state ={

  }
  componentDidMount(){

  }
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
}

handleFormSubmit = e => {
    e.preventDefault();

    const newPeriodPost = {
        title: this.state.title,
        image: this.state.image,
        productCategory: this.state.productCategory
    }

    // connecting to utils to create a post.
    API.createPeriodPost(newPeriodPost);

    this.setState(
        {
            title: "", productCategory: "", image: ""
        }
    )
}
  render(){
  return (
    <div className="container">
      {this.posts.map(post => (
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
}
      
export default PeriodPostWrapper;

