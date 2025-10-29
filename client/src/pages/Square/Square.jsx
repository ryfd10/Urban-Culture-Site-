


import Admin from '../Admin/Admin'
import './Square.css'

const A=Admin()
const getAll=All()
console.log({All});

const Square = ({ name, phone,address}) => {

    return <>
        <div className='square'>
            {/* <div className='img'>
                <img src={open ? discover : cover} alt=""></img>
            </div> */}
            {
                 <div className='name'>{name}</div>  
            }
            {
                
                    <div className='img'>
                        <img src={phone} alt=""></img>
                    </div>  
            }
            
            {
                
                    <div className='img'>
                        <img src={address} alt=""></img>
                    </div> 
            }
        </div>
    </>
}

export default Square