import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Home = (props) => {
  console.log(props);
return(
<h1>Hello World</h1>
)
}
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/*<Route strict path="/about" component={Home} />*/} {/* using strict to confirm exact route regexp with strict  */}
        {/* <Route path="/about" render={() => <h1>about</h1>} /> */}
        <Route path="/about" children={(match) =>  match && <h1>about</h1>} /> 
        {/* this is information that are passed through render or 
        children from react-router to our components */}
      </div>
    </Router> 
  )
}
export default App;