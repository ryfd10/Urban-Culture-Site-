import {configureStore} from '@reduxjs/toolkit'
import User from './user'

export default configureStore({
    reducer:{
        User
    }
})

