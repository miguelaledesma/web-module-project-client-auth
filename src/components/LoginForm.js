import React, {useState} from "react"
import { useHistory } from "react-router"
import axios from "axios"

const initialFormValues = {
    username : "", 
    password : ""
}


const Login = (props) => {
    const [values, setValues] = useState(initialFormValues)
    const { push } = useHistory()

    // if(!window.localStorage.getItem('token')){
    //     return props.push("/")
    // }

    const handleChange = (evt) => {
        const {id, value } = evt.target
        setValues({...values, [id]: value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', values)
        .then(resp => {
            const token = resp.data.token
            window.localStorage.setItem("token", token )
            push('/friends')
            
        })
        .catch(err => {
            console.err('Error, call your dev')
        })
    }

    // console.log(values)
    return(
        <div> 
          <h2>Login</h2> 
      <form onSubmit = {onSubmit}>
        <div>
        <label htmlFor = "username">Username</label>
        <input 
        id = "username"
        name = "username"
        value = {values.username} 
        onChange = {handleChange}
        
          /> 
        </div>
        <div>
        <label htmlFor = "password">Password</label>
        <input 
        id = "password"
        name = "password"
        type = "password"
        onChange = {handleChange}
        /> 
        </div> 
        <button>Login</button>
      </form>
       </div>
    )
  }
  export default Login
  