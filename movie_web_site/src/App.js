import Home from "./routes/Movies";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ background: "gray"}}>
      <Router>
        <Switch>
          <Route path="/movie/:id" >
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
