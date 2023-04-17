import Search from "./Search";
import Article from "./Article";
import Pagination from "./Pagination";
import someDummyData from "./dummy.json";

export default function Body() {
  const arrayWeGetFromAPI = [...someDummyData];
  return (
    <div className="Body">
      <Search />
      <ol>
        {arrayWeGetFromAPI.map((item) => (
          <Article
            title={item.title}
            points={item.points}
            author={item.author}
            time={item.created_at_i}
            visibility={true}
            comments={item.num_comments}
          />
        ))}
      </ol>
      <Pagination />
    </div>
  );
}
