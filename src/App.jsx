import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [query, setQuery] = useState("react");

  const fetchData = async function (queryWord) {
    try {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${queryWord}`
      );
      const data = await res.json();
      setFetchedData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Body fetchedData={fetchedData.hits} setQuery={setQuery} />
      <Footer />
    </div>
  );
}

export default App;
