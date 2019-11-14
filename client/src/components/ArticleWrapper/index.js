import React from "react";
import "./style.css";

function ArticleWrapper(props) {
  //GGRE--> For debugging only
  console.log("props.articles--> ", props.articles);
  return (
    <div>
      <br></br>
      <ul className="list-articles">
        {props.articles.map(article => (
          <li key={article.itemId} className="list-article-item">
            <p>Title: <strong>{article.title}</strong></p>
            <p>Url: <a href={article.url} target="blank">{article.url}</a></p>
            <p>Tags: {article.tags.join(" | ")}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleWrapper;
