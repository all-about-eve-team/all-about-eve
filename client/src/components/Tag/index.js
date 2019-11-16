import React, {Component} from "react";
import API from "../../utils/API";
import "./style.css";
import ArticleWrapper from "../ArticleWrapper";

class Tag extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    tags: [],
    articles: [],
    selectedTags: "",
    validationError: ""
  }

  handleFilterArticles = event => {
    //event.preventDefault();
    this.setState({
      selectedTags: event.target.value, validationError: event.target.value === "" ? "You must select at least one tag" : (
        API.getArticleTag(this.state.selectedTags)
          .then(res => {
            // GGRE--> For debugging only
            console.log("res.data--> ", res.data);
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            // Grab all articles
            this.setState({
              articles: res.data
            })
          })
          .catch(err => console.log(err))
      )
    })
  };

  render() {
    // making sure that the articles page only displayes if the user is logged in
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {/* {loggedIn ? ( */}
        {/* Check if there are tags  */}
        this.props.tags.length ? (
          <div className="main-articles" >
            <div className="list-tags">
              <select value={this.props.tags} onChange={this.handleFilterArticles}>
                {this.state.tags.map((tag) => <option key={tag.value} value={tag.value}>{tag.display}</option>)}>
              </select>
            </div>
            {/* Check if there are articles   */}
            this.state.articles.length ? (
              <div className="articles-wrapper">
                <ArticleWrapper articles={this.state.articles} />
              </div>
            ) : (
              <h3>There are no articles for the selected tags!</h3>
            )
          </div>
        ) : (
              <h3>There are no tags!</h3>
        )
        {/* ) : (
            <h1>You must be logged in to view this content!</h1>
          )} */}
      </div>
    )
  }
}

export default Tag;
