export default function Article({
  title,
  points,
  author,
  time,
  visibility,
  comments,
}) {
  const hide = ({ target }) => {
    const item = target.closest(".Article");
    item.style.display = "none";
  };

  return (
    <li className="Article">
      <h2>{title}</h2>
      <p>
        <span>{points}</span> points | by <span>{author}</span> |{" "}
        <span>{time}</span> |{" "}
        <span onClick={hide}>{visibility ? `hide` : null}</span> |{" "}
        <span>{comments}</span> Comments
      </p>
    </li>
  );
}
