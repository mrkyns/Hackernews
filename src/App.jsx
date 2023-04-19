import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reagan from "./components/Reagan";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [query, setQuery] = useState("");
  const [hitsPerPage, setHitsPerPage] = useState(5);
  const [pageNum, setPageNum] = useState(0);

  const fetchData = async function (queryWord, hitsPerPage, pageNum) {
    try {
      const res = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${queryWord}&hitsPerPage=${hitsPerPage}&page=${pageNum}`
      );
      const data = await res.json();
      setFetchedData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(query, hitsPerPage, pageNum);
  }, [query, hitsPerPage, pageNum]);

  return (
    <div className="App">
      <Header />
      <Body
        fetchedData={fetchedData}
        hits={fetchedData.hits}
        setFetchedData={setFetchedData}
        setQuery={setQuery}
        setHitsPerPage={setHitsPerPage}
        setPageNum={setPageNum}
      />
      <Footer />
      <Reagan />
    </div>
  );
}

export default App;
