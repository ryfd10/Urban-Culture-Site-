import { useState } from "react"
import { useDispatch } from "react-redux"
import {login as loginUser} from "../../../store/user"


const SignIn = () => {
const dispatch=useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async() => {
      dispatch(loginUser({username,password}))

    }


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