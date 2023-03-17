import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./components/BookList";

import "./assets/css/styles.css";

const App = () => {
  return (
    <div className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
