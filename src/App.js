import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*">"Error"</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
