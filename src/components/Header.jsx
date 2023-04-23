export default function Header({ setIsLoadingFront, setSortBy, setObjectID }) {
  const handleFrontLoad = () => {
    setIsLoadingFront(true);
    setObjectID("");
  };

  return (
    <div className="Header">
      <div className="navigation">
        <svg
          onClick={handleFrontLoad}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 213.9 213.9"
          space="preserve"
        >
          <g>
            <path d="M0,0v213.9h213.9V0H0z M208.8,208.8H5.1V5.1h203.6V208.8z" />
            <polygon points="99.1,187.6 115.3,187.6 115.3,124.8 166.9,26.3 149,26.3 107.2,110.1 65.2,26.3 47,26.3 99.1,124.8 	" />
          </g>
        </svg>
        <nav>
          <span onClick={handleFrontLoad}>Hacker News</span>
          <ul>
            <li>
              <a href="#" onClick={() => setSortBy("created_at_i")}>
                new
              </a>{" "}
              |
            </li>
            <li>
              {" "}
              <a href="#">past</a> |
            </li>
            <li>
              {" "}
              <a href="#" onClick={() => setSortBy("num_comments")}>
                comments
              </a>{" "}
              |
            </li>
            <li>
              {" "}
              <a href="#">ask</a> |
            </li>
            <li>
              {" "}
              <a href="#">show</a> |
            </li>
            <li>
              {" "}
              <a href="#">jobs</a> |
            </li>
            <li>
              {" "}
              <a href="#">submit</a> |
            </li>
          </ul>
        </nav>
      </div>
      <div className="login">
        <a href="#">Login</a>
      </div>
    </div>
  );
}
