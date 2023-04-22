export default function Comments({ author, text }) {
  return (
    <div>
      <h3>{author}</h3>
      <p>{text}</p>
    </div>
  );
}
