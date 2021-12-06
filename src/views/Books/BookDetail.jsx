import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'
import './booklist.css'

function BookDetail() {
  const { id } = useParams() // TODO: Use id from route
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>
  return (
    <>
      <NavLink className="link" to="/books">{`<< Back to Catalog`}</NavLink>
      <hr className="lineBreak" />
      <Book book={book} showDetail navigate />
    </>
  )
}

export default BookDetail
