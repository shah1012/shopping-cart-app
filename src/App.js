import "./App.css";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Router>
    </div>
  );
}

export default App;
