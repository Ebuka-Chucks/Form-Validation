import React, { useState, useEffect } from "react";
import "../styles/books.css";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setData(null);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const BookList = () => {
  const { data, loading, error } = useFetch(
    "https://example-data.draftbit.com/books?_limit=20"
  );

  const [sortBy, setSortBy] = useState(null);

  const handleSortByName = () => {
    setSortBy("name");
  };

  const sortedData = data
    ? [...data].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        return 0;
      })
    : [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="water ">
      <div className="contain ">
        {sortedData.map((book) => (
          <li key={book.id}>
            <img src={book.image_url} alt={book.name} />
            <h2>{book.name}</h2>
            <p>Title: {book.title}</p>
            <p>Authors: {book.authors}</p>
            <p>
              Rating:
              <span style={{ color: book.rating < 4 ? "green" : "gold" }}>
                {book.rating}
              </span>
            </p>
          </li>
        ))}
        <div className="btn">
          <button onClick={handleSortByName}>Sort by Name</button>
        </div>
      </div>
    </div>
  );
};

export default BookList;
