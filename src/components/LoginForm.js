import React, {useState} from "react"

const initialFormValues = {
    username : "", 
    password : ""
}


const Login = (props) => {
    const [values, setValues] = useState(initialFormValues)


    const onChange = (evt) => {
        const {id, value } = evt.target
        setValues({...values, [id]: value})
    }

    const onSubmit = () => {
        
    }


    return(
        <div> 
          <h2>Login</h2> 
      <form>
        <div>
        <label htmlFor = "username">Username</label>
        <input id = "username" value = {values.username} /> 
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
  