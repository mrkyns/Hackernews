import Search from "./Search";
import Pagination from "./Pagination";
import { useEffect, useState, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Body({ fetchedData, setQuery, loading }) {
  const [hits, setHits] = useState([]);

  const override = {
    display: "block",
    margin: "20px auto",
  };

  useEffect(() => {
    if (fetchedData.hits) setHits(fetchedData.hits);
  }, [fetchedData]);

  return (
    <div className="Body">
      <Search fetchedData={fetchedData} setQuery={setQuery} />
      <ClimbingBoxLoader
        color="var(--accent)"
        loading={loading}
        cssOverride={override}
        size={25}
      />

      <div className="pagination">
        <Pagination setHits={setHits} itemsPerPage={20} hits={hits} />
      </div>
    </div>
  );
}
