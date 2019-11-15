import React, {Component} from "react";
import API from "../utils/API";
import "./style.css";
import axios from "axios";
import ArticleWrapper from "../components/ArticleWrapper";

class Tag extends Component {
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
            //GGRE--> For debugging only
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
        {loggedIn ? (
          this.state.tags.length ? (
            <div className="main-articles" >
              <div className="list-tags">
                <h3>Just to see if it works!</h3>
                <select value={this.props.tags} onChange={this.handleFilterArticles}>
                  {this.state.tags.map((tag) => <option key={tag.value} value={tag.value}>{tag.display}</option>)}>
                </select>
              </div>
              <div className="articles-wrapper">
                <ArticleWrapper articles={this.state.articles} />
              </div>
            </div>
          ) : (
              <h3>There are no tags!</h3>
            )
        ) : (
            <h1>You must be logged in to view this content!</h1>
          )}
      </div>
    )
  }
}

export default Tag;
