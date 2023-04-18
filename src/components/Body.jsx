import Search from "./Search";
import Article from "./Article";
import Pagination from "./Pagination";
// import someDummyData from "./dummy.json";
import someDummyData from "./dummy_long.json";

export default function Body() {
  const arrayWeGetFromAPI = [...someDummyData.hits];
  // console.log(
  //   window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  // );
  return (
    <div className="Body">
      <Search />
      <ol>
        {arrayWeGetFromAPI.map((item) => (
          <Article
            title={item.title}
            url={item.url}
            points={item.points}
            author={item.author}
            time={item.created_at_i}
            visibility={true}
            comments={item.num_comments}
            id={item.objectID}
          />
        ))}
      </ol>
      <Pagination />
    </div>
  );
}
