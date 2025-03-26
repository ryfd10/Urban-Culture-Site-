import { useState } from "react"

const NewFamily=()=>{
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const addFamily = async() => {
        const myHeaders=new Headers()
        myHeaders.append("Content-Type","application/json")
        myHeaders.append("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzQyOTg3OTA5fQ.0oJIkR6rPRLspPHvGBWHjMLCnIHxV7rC0aOcWZpWefE")
        console.log({ name, address,phone });
        const response= await fetch('http://127.0.0.1:8080/users/login',{
            body:JSON.stringify({name,address,phone}),
            method:'POST',
            headers:myHeaders
        })
        console.log(response);
}
return <>
        <h2>Add Family</h2>
        <p>
            <input type="text" placeholder="user name" value={name} onInput={(ev) => setName(ev.target.value)}></input>
        </p>
        <p>
            <input type="text" placeholder="address" value={address} onInput={(ev) => setAddress(ev.target.value)}></input>
        </p>
        <p>
            <input type="text" placeholder="phone" value={phone} onInput={(ev) => setPhone(ev.target.value)}></input>
        </p>
        <p>
            <input type="button" onClick={addFamily} value="log in"></input>
        </p>
    </>
}

export default NewFamily