import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const Login = () => {
  return(
      <div> 
        <h2>Login</h2> 
    <form>
      <div>
      <label htmlFor = "username">Username</label>
      <input id = "username" /> 
      </div>
      <div>
      <label htmlFor = "password">Password</label>
      <input id = "password" type = "password"/> 
      </div> 
      <button>Login</button>
    </form>
     </div>
  )
}




const FriendsList = () => {
  return(<h2>Friends List</h2>)
}

const AddFriend = () => {
  return(<h2>Add Friend</h2>)
}


function App() {
  return (
    <Router>
    <div className="App">
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
    </div>
    </Router>
  );
}

export default App;
