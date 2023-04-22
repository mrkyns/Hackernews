import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";

export default function Article({
  title,
  articleNum,
  url,
  points,
  author,
  time,
  comments,
  id,
  setHits,
  query,
  setObjectID,
}) {
  const [displayedPoints, setDisplayedPoints] = useState(points);
  const [arePointsIncreased, setArePointsIncreased] = useState(false);

  const increasePoints = ({ target }) => {
    const button = target.closest("button");
    if (!button) return;
    if (!arePointsIncreased) {
      setArePointsIncreased(true);
      setDisplayedPoints((prev) => prev + 1);
      button.children[0].style.stroke = "none";
      button.children[0].classList.add("Article__btn-animation");
    } else {
      setArePointsIncreased(false);
      setDisplayedPoints((prev) => prev - 1);
      button.children[0].style.stroke = "var(--accent)";
      button.children[0].classList.remove("Article__btn-animation");
    }
  };

  const hide = () => {
    setHits((prev) => {
      return prev.filter((item) => +item.objectID !== +id);
    });
  };

  const slicedTitle = title?.length > 60 ? `${title.slice(0, 60)} ...` : title;

  const uppercaseMap = slicedTitle?.split("").reduce((acc, val, ind) => {
    acc[ind] = val === val.toUpperCase();
    return acc;
  }, {});

  const partitionedByQueryWord = slicedTitle?.toLowerCase().split(query) || [
    slicedTitle,
  ];

  // Case sensitivity
  const dummyDelimiter = query && "*".repeat(query.length);
  const titleArr = partitionedByQueryWord
    .join(dummyDelimiter)
    .split("")
    .map((char, ind) => {
      if (uppercaseMap[ind]) return char.toUpperCase();
      return char;
    })
    .join("")
    .split(dummyDelimiter);
  /////

  const originalQueryWord =
    query &&
    slicedTitle?.slice(titleArr[0].length, titleArr[0].length + query.length);

  const urlText = url?.split("/")[2];

  const handleFetchComments = () => setObjectID(id);

  return (
    <li className="Article__wrapper">
      <span className="Article__num">{articleNum}.</span>
      <div className="Article">
        <a
          href={url}
          className="Article__title"
          target="_blank"
          rel="noreferrer"
        >
          <h3>{!title && "Article has been removed :("}</h3>
          <h3>
            {titleArr.map((part, index) => (
              <>
                {part}
                <span className="Article__highlight">
                  {index !== titleArr.length - 1 ? originalQueryWord : null}
                </span>
              </>
            ))}
          </h3>
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
            hide
          </span>{" "}
          |{" "}
          <span className="Article__hide" onClick={handleFetchComments}>
            {comments} Comments
          </span>
        </p>
      </div>
      <button className="Article__btn-up" onClick={increasePoints}>
        <svg
          className="Article__btn-svg"
          width="25"
          height="23"
          viewBox="0 0 25 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3027 0.606445C16.5723 0.860351 17.3975 2.0957 17.1436 3.36523L17.0312 3.92187C16.7725 5.22559 16.2939 6.46582 15.625 7.59375H22.6562C23.9502 7.59375 25 8.64355 25 9.9375C25 10.8408 24.4873 11.627 23.7354 12.0176C24.2676 12.4473 24.6094 13.1064 24.6094 13.8438C24.6094 14.9863 23.7891 15.9385 22.71 16.1436C22.9248 16.5 23.0469 16.915 23.0469 17.3594C23.0469 18.3994 22.3682 19.2832 21.4307 19.5859C21.4648 19.7471 21.4844 19.918 21.4844 20.0938C21.4844 21.3877 20.4346 22.4375 19.1406 22.4375H14.3799C13.4521 22.4375 12.5488 22.1641 11.7773 21.6514L9.89746 20.3965C8.59375 19.5273 7.8125 18.0625 7.8125 16.4951V14.625V12.2812V11.0654C7.8125 9.63965 8.46191 8.29688 9.57031 7.40332L9.93164 7.11523C11.2256 6.08008 12.1094 4.625 12.4316 3.00391L12.5439 2.44727C12.7979 1.17773 14.0332 0.352539 15.3027 0.606445ZM1.5625 8.375H4.6875C5.55176 8.375 6.25 9.07324 6.25 9.9375V20.875C6.25 21.7393 5.55176 22.4375 4.6875 22.4375H1.5625C0.698242 22.4375 0 21.7393 0 20.875V9.9375C0 9.07324 0.698242 8.375 1.5625 8.375Z"
            fill="inherit"
          />
        </svg>
      </button>
    </li>
  );
}
