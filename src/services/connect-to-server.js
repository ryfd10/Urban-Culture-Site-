import axios from "axios"


export const postToServer = async (url, headers, data) => {
    try {
        const response = await axios.post(url, data, {
            headers
        })
      return  response
    }
    catch (err) {
        throw err
    }
}