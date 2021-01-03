import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Notes from "./components/Notes/Notes";
import Signin from "./components/forms/Signinform";
import Login from "./components/forms/Loginform";
import Profile from "./components/profile/profile";
import Profilenotes from "./components/profile/Profilenotes";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (<div>
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>

          </Route>
          <Route path="/search">
            <Search/>

          </Route>
          <Route path="/profile">
            <Profile />

          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signin">
            <Signin/>

          </Route>
          <Route path="/notes/:id" component={Notes}>

          </Route>
          <Route path="/:id" component={Profilenotes}>
            

          </Route>

        </Switch>
      
      </div>
     </Router>
    </div>
  );
}

export default App;
