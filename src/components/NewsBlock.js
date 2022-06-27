import React, { useState } from "react";

function NewsBlock({ news }) {
  const [hidden, setHidden] = useState(false);

  console.log(news);

  const handleNewsHide = (e) => {
    setHidden((prev) => !prev);
  };

  if (!hidden) {
    return (
      <div>
        <div className="row">
          <a target="_blank" href={news.url}>
            <h5>{news.title}</h5>
          </a>
        </div>
        <div className="row">
          <div className="col-1">Score: {news.score}</div>
          <div className="col-2">By: {news.by}</div>
          {news.kids ? (
            <div className="col-2">Comments: {news.kids.length}</div>
          ) : (
            <div className="col-2"></div>
          )}
          <div className="col-1">Discusse</div>
          <div className="col-1" onClick={handleNewsHide}>
            Hide
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <p className="col" onClick={handleNewsHide}>
          Show
        </p>
      </div>
    );
  }
}

export default NewsBlock;
