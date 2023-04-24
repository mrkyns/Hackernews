import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reagan from "./components/Reagan";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedComments, setFetchedComments] = useState([]);
  const [query, setQuery] = useState("");
  const [objectID, setObjectID] = useState("");
  const [hitsPerPage, setHitsPerPage] = useState(1000);
  const [pageNum, setPageNum] = useState(0);
  const [isLoadingFront, setIsLoadingFront] = useState(true);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");

  const fetchData = async function (url, loadingData = true) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      loadingData ? setFetchedData(data) : setFetchedComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchFrontPage = async function () {
    fetchData(
      `https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100`
    );
  };

  const fetchByQuery = (queryWord, hitsPerPage, pageNum) => {
    fetchData(
      `https://hn.algolia.com/api/v1/search?query=${queryWord}&hitsPerPage=${hitsPerPage}&page=${pageNum}`
    );
  };

  const fetchComments = (objectID) => {
    fetchData(
      `https://hn.algolia.com/api/v1/search?hitsPerPage=1000&tags=comment,story_${objectID}`,
      false
    );
  };

  useEffect(() => {
    if (isLoadingFront) return;
    if (query) fetchByQuery(query, hitsPerPage, pageNum);
    else fetchFrontPage();
  }, [query]);

  // first Run
  useEffect(() => {
    fetchFrontPage();
    setIsLoadingFront(false);
  }, [isLoadingFront]);

  // fetch Comments
  useEffect(() => {
    if (isLoadingFront) return;
    fetchComments(objectID);
  }, [objectID]);

  return (
    <div className="App">
      <Header
        setIsLoadingFront={setIsLoadingFront}
        fetchedData={fetchedData}
        setSortBy={setSortBy}
        setObjectID={setObjectID}
      />

      <Body
        fetchedData={fetchedData}
        hits={fetchedData.hits}
        setFetchedData={setFetchedData}
        setQuery={setQuery}
        setHitsPerPage={setHitsPerPage}
        setPageNum={setPageNum}
        loading={loading}
        filterBy={sortBy}
        query={query}
        setLoading={setLoading}
        setObjectID={setObjectID}
        objectID={objectID}
        fetchedComments={fetchedComments}
      />
      <Footer />
      <Reagan />
    </div>
  );
}

export default App;
