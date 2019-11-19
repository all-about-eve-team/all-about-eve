import React from "react";
import "./style.css";
import { Container , Col } from "react-bootstrap";

function ArticleWrapper(props) {
  //GGRE--> For debugging only
  console.log("props.articles--> ", props.articles);
  return (
    <div>
      <br></br>
      <Container>
      <ul className="list-articles">
        {props.articles.map(article => (
          <li key={article.itemId} className="list-article-item">
            <Col>
            <p> <strong><a href={article.url} target="blank">{article.title}</a></strong></p>
            </Col>
            <Col>
            <p>Tags: {article.tags.join(" | ")}</p>
          </Col>
          <hr></hr>
          </li>
        ))}
        
      </ul>
      </Container>
    </div>
  )
}

export default ArticleWrapper;
