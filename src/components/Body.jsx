import Search from "./Search";
import Article from "./Article";
import Pagination from "./Pagination";

const someDummyData = [
  {
    created_at: "2019-05-07T18:27:42.000Z",
    title:
      "Css-only-chat: A truly monstrous async web chat using no JS on the front end",
    url: "https://github.com/kkuchta/css-only-chat",
    author: "bennylope",
    points: 1010,
    story_text: null,
    comment_text: null,
    num_comments: 148,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1557253662,
    relevancy_score: 8818,
    _tags: ["story", "author_bennylope", "story_19852105"],
    objectID: "19852105",
    _highlightResult: {
      title: {
        value:
          "Css-only-chat: A truly monstrous async web chat using no <em>JS on</em> the front end",
        matchLevel: "full",
        fullyHighlighted: false,
        matchedWords: ["json"],
      },
      url: {
        value: "https://github.com/kkuchta/css-only-chat",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "bennylope",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2016-11-05T11:03:15.000Z",
    title: "Show HN: Make an app by adding JSON to this app",
    url: "https://github.com/Jasonette/JASONETTE-iOS?hn",
    author: "gliechtenstein",
    points: 648,
    story_text: null,
    comment_text: null,
    num_comments: 176,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1478343795,
    relevancy_score: 7057,
    _tags: ["story", "author_gliechtenstein", "story_12879179", "show_hn"],
    objectID: "12879179",
    _highlightResult: {
      title: {
        value: "Show HN: Make an app by adding <em>JSON</em> to this app",
        matchLevel: "full",
        fullyHighlighted: false,
        matchedWords: ["json"],
      },
      url: {
        value: "https://github.com/Jasonette/JASONETTE-iOS?hn",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "gliechtenstein",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
];

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
