import "./Article.css";

export default function Article({
  title,
  url,
  points,
  author,
  time,
  visibility,
  comments,
  id,
}) {
  const hide = ({ target }) => {
    const item = target.closest(".Article");
    item.style.display = "none";
  };
  const urlText = url.split("/")[2];

  return (
    <li className="Article" key={id}>
      <a href={url}>
        <h3>{title}</h3>
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        ({urlText})
      </a>
      <p>
        <span>{points}</span> points | by <span>{author}</span> |{" "}
        <span>{time}</span> |{" "}
        <span onClick={hide}>{visibility ? `hide` : null}</span> |{" "}
        <span>{comments}</span> Comments
      </p>
    </li>
  );
}
