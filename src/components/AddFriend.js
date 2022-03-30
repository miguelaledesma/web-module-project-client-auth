import React, {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router"

const initialFriendValues = {
    name: "", 
    age: "", 
    email: ""
}

const AddFriend = () => { 
    const {push} = useHistory()
    const [form, setForm] = useState(initialFriendValues)
    
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form ,{
            headers: {
              authorization: token
            }
          })
    .then(resp => {
        push("/friends")
    })
    .catch(err => {
        console.error(err)
    })

    }

    return(
        <div>
    <h2>Add Friend</h2>
    <form onSubmit = {handleSubmit}>
        <div>
        <label htmlFor = "username"> Friend Name</label>
        <input 
        id = "username"
        name = "name"
        onChange = {handleChange}
         /> 
        </div>
        <div>
        <label htmlFor = "age" >Age</label>
        <input 
        id = "age"
        name = "age"
        onChange = {handleChange}
        /> 
        </div>
        <div>
        <label htmlFor = "email" >Email</label>
        <input 
        id = "email"
        name = "email"
        onChange = {handleChange}
        /> 
        </div>
        <button>Submit</button>
    </form>
    </div>
    )
  }
  
export default AddFriend