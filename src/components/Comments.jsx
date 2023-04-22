import { Parser } from "html-to-react";

export default function Comments({ author, text }) {
  const parser = new Parser();
  return (
    <div className="Article__wrapper Comment">
      <h3>
        by <span className="Article__title">{author}</span>
      </h3>
      {parser.parse(text)}
    </div>
  );
}
