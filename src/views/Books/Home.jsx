import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h3>Welcome to Tanner's Library of Computer Science!</h3>
      <p>
        Check out the amazing selection of books in our{' '}
        <Link className="link" to="/books">
          catalog
        </Link>
      </p>
    </>
  )
}
export default Home
