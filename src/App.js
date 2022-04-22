import "./App.css";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import { HomeTemplate } from "./tempalates/Layout/HomeTemplate/HomeTemplate";
import { TicketTemplate } from "./tempalates/Layout/TicketTemplate/TicketTemplate";
import Home from "./pages/Home/Home";
import Login from "./tempalates/Layout/Login/Login";
import Register from "./tempalates/Layout/Register/Register";
// import { Router } from "react-router";
import { createBrowserHistory } from "history";
// import { Route } from "react-router-dom";
import DetailPages from "./pages/DetailPages/DetailPages";
import Ticket from "./pages/Ticket/Ticket";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/"} exact Component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <HomeTemplate path={"/detail/:id"} exact Component={DetailPages} />
        <TicketTemplate path={"/ticket/:id"} exact Component={Ticket} />
      </Switch>
    </Router>
  );
}

export default App;
