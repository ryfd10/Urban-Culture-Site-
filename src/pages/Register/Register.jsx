import { Link, Outlet } from "react-router"

const Register=()=>{
    return<>
    <h2>Register</h2>
    <Outlet></Outlet>

    <ul>
        <li>
            <Link to={'/register'}>Sign In</Link>
        </li>
        <li>
            <Link to={'/register/signup'}>Sign Uo</Link>
        </li>
    </ul>
    </>
}

export default Register