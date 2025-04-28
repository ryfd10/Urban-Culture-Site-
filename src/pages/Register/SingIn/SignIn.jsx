import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {login as loginUser} from "../../../store/user"


const SignIn = () => {

    const loginState=useSelector(state=>state.User.requestState)
const dispatch=useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async() => {
      dispatch(loginUser({username,password}))

    }
    useEffect(()=>{
        console.log({loginState});
        
    },[loginState])


    return <>
        <h2>Sign In</h2>
        <p>
            <input type="text" placeholder="user name" value={username} onInput={(ev) => setUsername(ev.target.value)}></input>
        </p>
        <p>
            <input type="password" placeholder="password" value={password} onInput={(ev) => setPassword(ev.target.value)}></input>
        </p>
        <p>
            <input type="button" onClick={login} value="log in"></input>
        </p>
    </>
}

export default SignIn