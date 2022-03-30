import React, {useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router"


const Logout = () => {
    const {push} = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post("http://localhost:9000/api/logout",{} ,{
            headers: {
              authorization: token
            }
          }) 
          .then(resp => {
              localStorage.removeItem('token')
              push("/login")
          })
          .catch()
    }, [])
    return(
    <div>

    </div>)
}

export default Logout