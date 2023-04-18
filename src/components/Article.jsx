import { useState } from "react";
import ReactTimeAgo from "react-time-ago";

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
  const [displayedPoints, setDisplayedPoints] = useState(points);
  const [arePointsIncreased, setArePointsIncreased] = useState(false);

  const increasePoints = () => {
    if (arePointsIncreased) return;
    setArePointsIncreased(true);
    setDisplayedPoints((prev) => prev + 1);
  };

  const hide = ({ target }) => {
    const item = target.closest(".Article");
    item.style.display = "none";
  };
  const urlText = url?.split("/")[2];

  return (
    <div className="Article__wrapper">
      <li className="Article" key={id}>
        <button className="Article__btn-up" onClick={increasePoints}>
          &#9650;
        </button>
        <a
          href={url}
          className="Article__title"
          target="_blank"
          rel="noreferrer"
        >
          <h3>{title ? title : "Article is removed :("}</h3>
        </a>
        <a
          className="Article__source"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          ({urlText ? urlText : "nowhere"})
        </a>
        <p>
          <span>{displayedPoints}</span> points | by <span>{author}</span> |{" "}
          <ReactTimeAgo date={time} /> |{" "}
          <span className="Article__hide" onClick={hide}>
            {visibility ? `hide` : null}
          </span>{" "}
          | <span>{comments}</span> Comments
        </p>
      </li>
    </div>
  );
}
