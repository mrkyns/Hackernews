import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reagan from "./components/Reagan";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [query, setQuery] = useState("");
  const [hitsPerPage, setHitsPerPage] = useState(1000);
  const [pageNum, setPageNum] = useState(0);
  const [isLoadingFront, setIsLoadingFront] = useState(true);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");

  const fetchData = async function (url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setFetchedData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchFrontPage = async function () {
    fetchData(
      `http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100`
    );
  };

  const fetchByQuery = (queryWord, hitsPerPage, pageNum) => {
    fetchData(
      `http://hn.algolia.com/api/v1/search?query=${queryWord}&hitsPerPage=${hitsPerPage}&page=${pageNum}`
    );
  };

  useEffect(() => {
    if (isLoadingFront) return;
    fetchByQuery(query, hitsPerPage, pageNum);
  }, [query]);

  // first Run
  useEffect(() => {
    fetchFrontPage();
    setIsLoadingFront(false);
  }, [isLoadingFront]);

  return (
    <div className="App">
      <Header
        setIsLoadingFront={setIsLoadingFront}
        fetchedData={fetchedData}
        setSortBy={setSortBy}
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
      />
      <Footer />
      <Reagan />
    </div>
  );
}

export default App;
