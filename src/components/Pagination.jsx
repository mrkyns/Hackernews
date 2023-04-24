import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Article from "./Article";
import NoResult from "./NoResult";
import Comments from "./Comments";

const hits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function Pagination({
  itemsPerPage,
  hits,
  setHits,
  query,
  setObjectID,
  objectID,
  fetchedComments,
  setLoading,
}) {
  const items = objectID !== "" ? fetchedComments.hits : hits;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    // console.log(items);
  };

  const handleBack = () => {
    setObjectID("");
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentItems]);

  if (items?.length > 0) {
    if (objectID) {
      return (
        <>
          <button className="btn--back" onClick={handleBack}>
            Back
          </button>
          <h2 className="Comment__title">
            {fetchedComments.hits[0].story_title}
          </h2>
          {currentItems.map((comment, index) => (
            <Comments
              author={comment.author}
              text={comment.comment_text}
              key={comment.author + index}
            />
          ))}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="previous"
            renderOnZeroPageCount={null}
          />
        </>
      );
    } else {
      return (
        <>
          <ol>
            {currentItems.map((item, index) => (
              <Article
                articleNum={itemOffset + index + 1}
                title={item.title}
                url={item.url}
                points={item.points}
                author={item.author}
                time={Date.parse(item.created_at)}
                comments={item.num_comments}
                key={item.created_at_i}
                id={item.objectID}
                setHits={setHits}
                query={query}
                setObjectID={setObjectID}
                setLoading={setLoading}
              />
            ))}
          </ol>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="previous"
            renderOnZeroPageCount={null}
          />
        </>
      );
    }
  } else {
    return <NoResult />;
  }
}
// Add a <div id="container"> to your HTML to see the component rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById('container')
// );

// Example items, to simulate fetching from another resources.
