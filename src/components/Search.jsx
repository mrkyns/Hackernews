import { useState } from "react";

export default function Search({ setQuery, setLoading, setObjectID }) {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    // console.log(lowerCase);
    setInputText(lowerCase);
    // setQuery(inputText);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(inputText);
    setObjectID("");
    setInputText("");
  };

  return (
    <div className="Search">
      {/* <div className="search_wrapper"> */}
      <form className="search_wrapper" onSubmit={submitHandler}>
        <input
          className="search_input"
          type="search"
          placeholder="Enter your query"
          onChange={inputHandler}
          value={inputText}
        />
        <button className="search_button">Search</button>
      </form>
      {/* </div> */}
    </div>
  );
}
