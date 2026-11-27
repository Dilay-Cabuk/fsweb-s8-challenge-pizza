import Home from "./pages/Home";
import "./App.css";
import Order from "./pages/Order";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Success from "./pages/Success";


export default function App() {
  const [order, setOrder] = useState(null);
  return (
    <>
      <Switch>

        <Route exact path="/order">
          <Order setOrder={setOrder} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
         <Route exact path="/success">
         <Success order={order}/>
          <Home />
        </Route>
      </Switch>

    </>
  );
}

