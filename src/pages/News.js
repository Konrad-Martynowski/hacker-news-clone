import { useContext, useState } from "react";

import DataContext from "../context/DataContext";
import NewsBlock from "../components/NewsBlock";

export default function News() {
  const { data, error } = useContext(DataContext);
  return (
    <div className="news">
      {error ? (
        <div>error</div>
      ) : data.length >= 30 ? (
        <div>
          {data
            .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))
            .slice(0, 30)
            .filter((d) => d.type === "story")
            .map((d, i) => {
              return (
                <div key={i} className="row">
                  <div className="col-1">{i + 1}</div>
                  <div className="col">
                    <NewsBlock news={d} />
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
