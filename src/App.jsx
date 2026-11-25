import Home from "./pages/Home";
import "./App.css";
import Order from "./pages/Order";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>

        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </>
  );
}

