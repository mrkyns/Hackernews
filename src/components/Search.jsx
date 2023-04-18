export default function Search( {fetchedData, setQuery} ) {

  let titles = fetchedData.map((item) =>item.title)
  // console.log(titles)
  // console.log(fetchedData)

  const searchBtn = document.querySelector("search_button")
  const searchBar = document.querySelector("search_input")

//inputWord = what we are searching for//

  function startQuery(inputWord) { 
    let searchedTitles = []
    titles.filter((title) => {
      if (title.includes(inputWord)) {
        return title && searchedTitles.push(title)
      }
      console.log(searchedTitles.length)
    })
  };
console.log(startQuery("France"))

  //   searchBtn.addEventListener("click", () => {
      
  // })
  // searchBar.addEventListener("submit",() =>{
  //   let inputWord = 
  // } )

  return (
    <div className="Search">
      {/* <div className="search_wrapper"> */}
        <form className="search_wrapper" method="get" action={fetchedData}>
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
