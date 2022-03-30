import React from "react"



const AddFriend = () => {
    return(
        <div>
    <h2>Add Friend</h2>
    <form>
        <div>
        <label htmlFor = "username"> Friend Name</label>
        <input id = "username" /> 
        </div>
        <div>
        <label htmlFor = "age" >Age</label>
        <input/> 
        </div>
        <div>
        <label htmlFor = "email" >Email</label>
        <input/> 
        </div>
        <button>Submit</button>
    </form>
    </div>
    )
  }
  
export default AddFriend