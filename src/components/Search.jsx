import { useState } from "react";

export default function Search( {fetchedData, setFetchedData, setQuery} ) {

  const [inputText, setInputText] = useState("");
  
  let inputHandler = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
    setQuery(inputText)
  };

  

  return (
    <div className="Search">
      {/* <div className="search_wrapper"> */}
        <form className="search_wrapper" onChange={inputHandler}>
          <input
            className="search_input"
            type="search"
            placeholder="Enter your query"
          />
          <button className="search_button">Search</button>
        </form>
      {/* </div> */}
    </div>
  );
}

/* This is just for me for the future -  search rule - max 1 char deviance and max -1 string length*/
