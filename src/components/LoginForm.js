import React from "react"



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
  export default Login
  