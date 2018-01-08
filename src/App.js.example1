import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// const Home = (props) => {
//   console.log(props);
// return(
// <h1>Hello World</h1>
// )
//}
const Links  = (props) => {
  return(
    <nav>
      <Link to="/">Home </Link>
      <Link to={{ pathname: '/about'}}> About</Link>
      <Link replace to="/contact">Contact</Link> {/* replace gives us a little control of how we managing our browser history, it replaces the previous URL */}
    </nav>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Links/>
        <Route exact path="/" render={() => <h1>Hello World</h1>} />
        {/*<Route strict path="/about" component={Home} />*/} {/* using strict to confirm exact route regexp with strict  */}
        <Route path="/about" render={() => <h1>About</h1>} />
        {/* <Route path="/about" children={(match) =>  match && <h1>About</h1>} />  */}
        {/* this is information that are passed through render or 
        children from react-router to our components */}
        <Route path="/contact" render={() => <h1>Contact</h1>} />
      </div>
    </Router> 
  )
}
export default App;