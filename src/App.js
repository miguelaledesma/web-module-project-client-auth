import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Login from './components/LoginForm';
import FriendsList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


function App() {
  return (
    
    
    <div className="App">
      <NavLink to = "/" >Login</NavLink>
      <NavLink to = "/friends" > Friends</NavLink>
      <NavLink to = "/friends/add"> Add Friend</NavLink>
      <NavLink to = "/logout"> Log Out</NavLink>
      <Route exact path = "/" > 
      <Login /> 
      </Route>

      <Route exact path = "/login" > 
      <Login /> 
      </Route>

      <Route exact path = "/friends" > 
      <FriendsList  /> 
      </Route>

      <Route exact path = "/friends/add" > 
      <AddFriend  /> 
      </Route>

      <Route exact path = "/logout" > 
      <Logout /> 
      </Route>
    </div>
    
  );
}

export default App;
