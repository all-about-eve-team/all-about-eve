import React from "react";
import "./style.css";

function ArticleWrapper(props) {
  //GGRE--> For debugging only
  console.log("props.articles--> ", props.articles);
  return (
    <div className="main-articles">
      <h3>List of articles</h3>
      <ul className="list-articles">
        {props.articles.map(article => (
          <li key={article.itemId} className="list-article-item">
            <p>Title: <a href={article.url} target="blank"><strong>{article.title}</strong></a></p>
            <p>Tags: {article.tags.join(" | ")}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleWrapper;
