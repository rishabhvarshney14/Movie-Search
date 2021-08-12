import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Custom Componets
import Search from "./components/search/Search";
import SearchResult from "./components/searchResult/SearchResult";
import TopIcons from "./components/navbar/TopIcons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopIcons />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search/:query" component={SearchResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
