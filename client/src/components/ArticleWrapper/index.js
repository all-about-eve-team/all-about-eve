import React from "react";

function ArticleWrapper(props) {
  console.log("hit ArticleWrapper()!");
  console.log(props.articles);
  return (
    <div>
      <h1>This will wrap the list of articles that match multiple tags</h1>
    </div>
    // <ul className="list-articles">
    //   {props.articles.map(article => (
    //     <li key={article.itemId} className="list-article-item">   {/* GGRE--> Should use _id instead??? itemID is unique too! */}
    //       Title: {article.title}
    //       Url: {article.url}
    //       {/* GGRE--> No need to show the tags array later */}
    //       {/* Tags: {article.tags} */}
    //     </li>
    //   ))}
    // </ul>
  );
}

export default ArticleWrapper;
