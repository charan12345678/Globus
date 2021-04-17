import React from 'react'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, withRouter  } from "react-router-dom";
import Visa1 from './components/Visa1';
import SocialHub from './components/SocialHub';
import SocialHubHeader from "./components/SocialHubHeader"
import CreatePost from './components/CreatePost';
import Postcreated from './components/Postcreated';
import Homes from './components/Homes';
// import { Carousel } from 'react-bootstrap';
import Carousel from './components/Carousel'
import Clip__path from './components/Clip__path';
import JoinNow from './components/JoinNow';
import SignUp from './components/SignUp';
import College from './components/College';
import { Product2, Product3, Product4 } from './components/Product2';
import Landingpage from './components/Landingpage';
//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store = {store}>
    <Router>
      <div className="app">
        <Switch>
        <Route path="/visa">
            <Visa1/>
          </Route>
        <Route path="/socialhub">
          <SocialHub/>
        </Route>
        <Route path="/createpost">
          <CreatePost/>
        </Route>
        <Route path="/postcreated">
          <Postcreated/>
        </Route>

          <Route path="/signUp">
           <Home/>
            {/* <Visa1/> */}
            <SignUp/>
          </Route>
          
          <Route path="/joinnow">
            <Home/>
            <JoinNow/>
          </Route>

          <Route path="/">
            <Landingpage></Landingpage>
          </Route>
        </Switch>
        
      </div>
    </Router>
    </Provider>
     
  );
};

export default App


