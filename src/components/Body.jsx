import Search from "./Search";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Body({
  fetchedData,
  setQuery,
  loading,
  query,
  sortBy,
}) {
  const [hits, setHits] = useState([]);

  const override = {
    display: "block",
    margin: "20px auto",
  };

  useEffect(() => {
    if (fetchedData.hits) setHits(fetchedData.hits);
  }, [fetchedData]);

  // console.log(noHits);

  useEffect(() => {
    setHits(
      hits.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      })
    );
    // console.log(sortBy);
  }, [sortBy]);

  // console.log(fetchedData);

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
