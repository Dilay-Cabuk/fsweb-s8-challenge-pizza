import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [order, setOrder] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/order">
          <Order setOrder={setOrder} />
        </Route>

        <Route exact path="/success">
          <Success order={order} />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}