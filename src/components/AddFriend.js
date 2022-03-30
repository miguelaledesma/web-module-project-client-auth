import React, {useState} from "react"
import axios from "axios"

const initialFriendValues = {
    name: "", 
    age: "", 
    email: ""
}

const AddFriend = () => { 
    const [form, setForm] = useState(initialFriendValues)
    
    const handleChange = (evt) => {
        const { id, value } = evt.target
        setForm({ ...form, [id]: value })
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
        console.log(resp)
    })
    .catch(err => {})

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