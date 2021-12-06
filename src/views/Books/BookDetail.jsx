import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const { id } = useParams() // TODO: Use id from route
  console.log('ID', id)
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>
  return (
    <>
      <NavLink to="/books">Back to Catalog</NavLink>
      <Book book={book} showDetail navigate />
    </>
  )
}

export default BookDetail
