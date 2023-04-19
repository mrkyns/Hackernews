import Search from "./Search";
import Article from "./Article";
import Pagination from "./Pagination";
// import someDummyData from "./dummy.json";
// import someDummyData from "./dummy_long.json";

export default function Body({ fetchedData = [], setFetchedData, setQuery }) {
  // const fetchedData = [...someDummyData.hits];
  return (
    <div className="Body">
      <Search  fetchedData={fetchedData} setQuery={setQuery}/>
      <ol>
        {fetchedData.map((item) => (
          <Article
            title={item.title}
            url={item.url}
            points={item.points}
            author={item.author}
            time={Date.parse(item.created_at)}
            visibility={true}
            comments={item.num_comments}
            key={item.objectID}
            id={item.objectID}
            setFetchedData={setFetchedData}
            fetchedData={fetchedData}
          />
        ))}
      </ol>
      <Pagination />
    </div>
  );
}
