import axios from "axios"


const postToServer = async (url, headers, data) => {
    try {
        const response = await axios.post(url, data, {
            headers
        })
        return response
    }
    catch (err) {
        throw err
    }
}
const getFromServer = (async(url) => {
   
const response = await axios.get(url)

   return {...response} 

})
export { postToServer, getFromServer }

