import Search from "./Search";
import Article from "./Article";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
// import someDummyData from "./dummy.json";
// import someDummyData from "./dummy_long.json";

export default function Body({
  fetchedData,
  setFetchedData,
  setQuery,
  setHitsPerPage,
  setPageNum,
}) {
  // const fetchedData = [...someDummyData.hits];
  const [hits, setHits] = useState([]);

  useEffect(() => {
    if (fetchedData.hits) setHits(fetchedData.hits);
  }, [fetchedData]);

  return (
    <div className="Body">
      <Search  fetchedData={fetchedData} setQuery={setQuery}/>
      <ol>
        {hits.map((item) => (
          <Article
            title={item.title}
            url={item.url}
            points={item.points}
            author={item.author}
            time={Date.parse(item.created_at)}
            visibility={true}
            comments={item.num_comments}
            key={item.objectID}
            id={item.objectID}
            setHits={setHits}
          />
        ))}
      </ol>
      <Pagination />
    </div>
  );
}
