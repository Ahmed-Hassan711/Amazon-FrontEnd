const title = "Saved: A War Reporter's Mission to Make It Home";
const author = "Benjamin Hall";

const Book = () => {
  return (
    <article className="book">
      <img src="./images/image_1.jpg" alt="A War Reporter's Mission" />;
      <h2>{title}</h2>;<h4>{author.toUpperCase()}</h4>;
    </article>
  );
};

export default Book;
