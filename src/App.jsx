import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Books/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={BookList} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
