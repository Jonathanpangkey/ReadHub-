import React from "react";
import {useEffect, useState} from "react";
import coverImg from "../../images/cover_not_found.jpg";
import Book from "../BookList/Book";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
import "./Recommendation.css";
import Loading from "../Loader/Loader";

function Recommendation() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const {subject} = useParams();
  const navigate = useNavigate();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.key.replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
    };
  });

  useEffect(() => {
    setLoading(true);
    fetch(`https://openlibrary.org/subjects/${subject}.json?limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.works || []);
        setLoading(false);
        console.log(data.works)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [subject]);

  if (loading) return <Loading />;

  return (
    <div className='recomendation'>
      <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
        <FaArrowLeft size={22} />
        <span className='fs-18 fw-6'>Go Back</span>
      </button>
      <h2>Recommended Books for: {subject}</h2>
      <div className='booklist-content grid'>
        {booksWithCovers.map((item, index) => {
          return <Book key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Recommendation;
