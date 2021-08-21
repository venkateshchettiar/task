import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Task from "./components/Task";
import User from "./components/User";
import Comment from "./components/Comment";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/comment" component={Comment} />
          <Route path="/user" component={User} />
          <Route path="/" component={Task} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
