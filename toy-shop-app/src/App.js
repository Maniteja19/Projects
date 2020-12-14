import React from "react"
import './App.css';
import HomePage from "./pages/homepage/Homepage"
import {Link,Route,Switch} from "react-router-dom"

const Hats = () => {
  return(
    <div>
        <h1>Hats</h1>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
         <Route exact path="/"><HomePage /></Route>
         <Route path="/shop/hats"><Hats /></Route>
      </Switch>
    </div>
  );
}

export default App;
