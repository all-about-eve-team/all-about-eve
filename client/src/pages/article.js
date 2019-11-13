import React, { Component } from 'react'
import API from "../utils/API"
import ArticleWrapper from "../components/ArticleWrapper"

class Article extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    console.log("hit loadArticles()!");
    API.getArticle()
      .then(res => {
        console.log("hit API.getArticle()!");
        console.log(res);
        this.setState({
          articles: res.data
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      //GGRE--> Need to add form with dropdown to select multiple tags and pass them onto the wrapper as props
      <div>
        <h1>Passing the articles as props to the wrapper</h1>
        <ArticleWrapper articles={this.state.articles}/>
      </div>
    )
  }
}

export default Article;