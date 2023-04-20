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
      
      <div className="pagination">
      <Pagination setHits={setHits} fetchedData={fetchedData} setFetchedData={setFetchedData} itemsPerPage={20} hits={hits} setHitsPerPage={setHitsPerPage} setPageNum={setPageNum}  />
      </div>

    </div>
  );
}
