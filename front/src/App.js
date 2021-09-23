import {useEffect, useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Item from "./views/item/Item";
import Home from "./views/home/Home";

import './App.css';

export default function App() {
  // store response from server
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])

  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home response={response}/>
            </Route>
            <Route path="/item">
              <Item response={response}/>
            </Route>
          </Switch>
      </Router>
    </>
  );
};