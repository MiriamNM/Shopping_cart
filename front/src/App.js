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
  const [data, setData] = useState([]);
  const [saveData, setSaveData] = useState({
    dataSaved:[],
});

  // call server to see if its running
  useEffect(() => {
    const getApiData = () => {
      fetch('http://localhost:5000/api/products/')
        .then((res) => res.json())
        .then((res) => setData(res))
    }
    getApiData()
  }, []);

  const handleSaveData = (descriptionArt) => {
    setSaveData({...saveData, dataSaved:[ descriptionArt]});
  }

  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home 
                data={data}
                saveData={saveData}
                setSaveData={setSaveData}
                handleSaveData={handleSaveData}
              />
            </Route>
            <Route path="/item">
              <Item 
                data={data}
                saveData={saveData}
              />
            </Route>
          </Switch>
      </Router>
    </>
  );
};