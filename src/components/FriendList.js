import React, {useState, useEffect } from "react";
import axios from "axios";


const FriendsList = (props) => {
    const [friends, setFriends] = useState([])
   
     
   

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                Authorization: token
              }
        })
        .then(resp => {
            setFriends(resp.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])

    return(
        
        <div>
    <h2>Friends List</h2>
    <ul>
        { friends.map(friend => {
                return <li> {friend.name} - {friend.age} - {friend.email} </li>
            })
        }
       
    </ul>
    </div>
    )
  }

  export default FriendsList