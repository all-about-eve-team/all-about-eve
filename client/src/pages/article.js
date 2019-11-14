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
    API.getArticle()
      .then(res => {
        //GGRE--> For debugging only
        //console.log("res.data--> ", res.data);
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
        <ArticleWrapper articles={this.state.articles}/>
      </div>
    )
  }
}

export default Article;