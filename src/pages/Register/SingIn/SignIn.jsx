import { useState } from "react"



const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async() => {
        const myHeaders=new Headers()
        myHeaders.append("Content-Type","application/json")
        console.log({ username, password });
        const response= await fetch('http://127.0.0.1:8080/users/login',{
            body:JSON.stringify({username,password}),
            method:'POST',
            headers:myHeaders
        })
console.log(response);

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