import React, {Component} from 'react'
import API from "../utils/API"
import ArticleWrapper from "../components/ArticleWrapper"
import TagWrapper from "../components/TagWrapper"
import {finished} from "stream"

class Article extends Component {
  state = {
    articles: [],
    tags: [],
    selectedTags: "",
    validationError: ""
  }

  componentDidMount() {
    // Load all articles at first
    this.loadArticles();
    // Load all tags to be used later as filters
    this.loadTags();
    //GGRE--> Test this next:  this.loadArticlesByTag();
  }

  loadArticles = () => {
    API.getArticle()
      .then(res => {
        //GGRE--> For debugging only
        console.log("res.data--> ", res.data);
        // All articles
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
        // All tags
        this.setState({
          tags: res.data
        })
      })
      .catch(err => console.log(err));
  };

  loadArticlesByTags = () => {
    API.getArticleTag()
      .then(res => {
        //GGRE--> For debugging only
        console.log("res.data--> ", res.data);
        // All articles filtered by tags
        let tagsFromApi = res.data.map(tag => {return {value: tag, display: tag}})
        this.setState({tags: [{value: "", display: "(Select at least one tag)"}].concat(tagsFromApi)});
      })
      .catch(err => console.log(err));
  };

  render() {
    // making sure that the articles page only displayes if the user is logged in
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div className="main-articles" >
            <div className="tags-wrapper">
              {/* GGRE--> Need to add form with dropdown to select multiple tags and pass them onto the tags wrapper as props */}
              <TagWrapper tags={this.state.tags} />
            </div>
            <div className="articles-wrapper">
              <ArticleWrapper articles={this.state.articles} />
            </div>
          </div>
        ) : (
          <h1>You must be logged in to view this content.</h1>
        )}
      </div>
    )
  }
}

export default Article;