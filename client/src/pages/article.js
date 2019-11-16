import React, {Component} from "react";
import API from "../utils/API";
import ArticleWrapper from "../components/ArticleWrapper";
import Tag from "../components/Tag";

class Article extends Component {
  state = {
    //GGRE --> Should this be an empty string at first or is it okay to have it as an empty array???
    tags: [],
    articles: [],
    error: ""
  }

  componentDidMount() {
    // Load all articles at first
    this.loadArticles();
    // Load all tags to be used later as filters
    this.loadTags();
  }

  loadArticles = () => {
    API.getArticle()
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
      .catch(err => console.log(err));
  };

  loadTags = () => {
    API.getTag()
      .then(res => {
        //GGRE--> For debugging only
        console.log("res.data--> ", res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        // Grab all tags
        const tagsFromApi = res.data.map(tag => {return {value: tag, display: tag}});
        this.setState({tags: [{value: "", display: "(Select at least one tag )"}].concat(tagsFromApi), error: ""});
      })
      //.catch(err => console.log(err));
      .catch(err => this.setState({error: err.message}));
  };

  render() {
    // making sure that the articles page only displayes if the user is logged in
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {/* {loggedIn ? ( */}
        {/* Check if there are articles */}
        this.state.articles.length ? (
          <div className="main-articles" >
            <div className="main-tags">
              <Tag tags={this.state.tags} />
            </div>
            <div className="articles-wrapper">
              <ArticleWrapper articles={this.state.articles} />
            </div>
          </div>
        ) : (
              <h3>No Articles to Display!</h3>
        )
        {/* ) : (
            <h1>You must be logged in to view this content!</h1>
          )} */}
      </div>
    )
  }
}

export default Article;