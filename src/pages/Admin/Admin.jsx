import { useEffect } from "react"
import { useSelector } from "react-redux"
import { data, useNavigate } from "react-router"
import { Link, Outlet } from "react-router"
//import { getAll as all} from "../../../store/user"
import { getFromServer } from "../../services/connect-to-server"


const Admin = () => {
    const nav = useNavigate()
    const { user } = useSelector(state => state.User)

    const All = async () => {
        const response = await getFromServer('http://127.0.0.1:8080/citizens/all')
console.log(response.data[0].address);
return response.data
            
            
                
    }

    useEffect(() => {
        if (user == undefined) {
            nav('/')
        }
    }, [user])

    return <>
        <h1>Admin works!</h1>
        <Outlet></Outlet>
        <ul>
            <li>
                <Link to={'/newFamily'}>הוספת משפחות</Link>
            </li>
           {/* <li>
                <Link to={'/showFamily'}> משפחות</Link>
            </li> */}
        </ul>
        <p>
            <input type="button" onClick={All} value="showTable"></input>
        </p>
    </>
}

export default Admin