import Search from "./Search";
import Pagination from "./Pagination";
import { useEffect, useState, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import NoResult from "./NoResult";

export default function Body({ fetchedData, setQuery, loading, query }) {
  const [hits, setHits] = useState([]);
  const [noHits, setNoHits] = useState(false);

  const override = {
    display: "block",
    margin: "20px auto",
  };

  useEffect(() => {
    if (fetchedData.hits) setHits(fetchedData.hits);
    if (fetchedData.nbHits === 0) {
      setNoHits(true);
    }
  }, [fetchedData]);

  // console.log(fetchedData);

  return (
    <div className="Body">
      <Search fetchedData={fetchedData} setQuery={setQuery} />
      {noHits ? <NoResult query={query} /> : null}
      <ClimbingBoxLoader
        color="var(--accent)"
        loading={loading}
        cssOverride={override}
        size={25}
      />

      <div className="pagination">
        <Pagination
          setHits={setHits}
          itemsPerPage={20}
          hits={hits}
          query={query}
        />
      </div>
    </div>
  );
}
