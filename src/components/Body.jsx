import Search from "./Search";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

export default function Body({ fetchedData, setQuery }) {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    if (fetchedData.hits) setHits(fetchedData.hits);
  }, [fetchedData]);

  return (
    <div className="Body">
      <Search fetchedData={fetchedData} setQuery={setQuery} />

      <div className="pagination">
        <Pagination setHits={setHits} itemsPerPage={20} hits={hits} />
      </div>
    </div>
  );
}
