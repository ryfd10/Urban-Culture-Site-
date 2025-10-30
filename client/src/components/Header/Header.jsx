import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import './Header.css'
import { useNavigate } from "react-router"
import {logout} from "../../store/user"



const Header = () => {
const nav=useNavigate()
    const { user } = useSelector(state => state.User)
    const [massage, setMassage] = useState()
    const [isLogIn, setIsLogIn] = useState(false)
const dispatch=useDispatch()
    useEffect(() => {
        if (user) {
            setIsLogIn(true)
            const hour = new Date().getHours()
           let wish = 'לילה טוב'
            if (hour > 5 && hour < 12) {
                wish = 'בוקר טוב'
            }
            if (hour > 11 && hour < 18) {
                 wish = 'צהרים טובים'
            }
            if (hour > 17 && hour < 22) {
                 wish = 'ערב טוב'
            }
            setMassage(`${wish} ${user}`)

        }
        else {
            setIsLogIn(false)
        }
    }, [user])

    const btnClick=()=>{
        if(isLogIn){
dispatch(logout())
setIsLogIn(false)
        }
    
    else{
nav('/register')
    }
    }

    return <>
        <div>
            <div>{massage}</div>
            <div>
                <button onClick={btnClick}>{isLogIn ?'יציאה':'כניסה'} </button>
            </div>
        </div>
    </>
}
export default Header
