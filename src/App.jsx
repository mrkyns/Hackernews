import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reagan from "./components/Reagan";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async function (queryWord) {
    try {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${queryWord}`
      );
      const data = await res.json();
      setFetchedData(data.hits);
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
      <Body
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
        setQuery={setQuery}
      />
      <Footer />
      <Reagan />
    </div>
  );
}

export default App;
