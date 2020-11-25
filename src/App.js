  import './App.css';
  import React, { Component } from 'react'
  import { Header } from "./Pages/Header";
  // import { getTen } from "./Reporsitory/loadData";
  import { Home } from "./Pages/Home";
  import { About } from "./Pages/About";
  import { GetAllFacts } from "./Pages/GetAllFacts"
  import { GetTenFacts } from "./Pages/GetTenFacts";
  import { BrowserRouter, Switch, Route } from "react-router-dom";




class App extends Component {


  render() {

    return <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/getTen">
            <GetTenFacts />
          </Route>
          <Route path="/getAll">
            <GetAllFacts />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  }
}

export default App;


//API
//https://cat-fact.herokuapp.com/facts/