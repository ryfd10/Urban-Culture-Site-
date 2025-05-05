import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postToServer } from '../services/connect-to-server';

export const login = createAsyncThunk('login/user', async ({ username, password }, { rejectWithValue }) => {
    try {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const response = await postToServer('http://127.0.0.1:8080/users/login', myHeaders, { username, password })
        const token = response.headers.getAuthorization()
        console.log(token);

        return { token, username }

    }
    catch (error) {
        return rejectWithValue(error.message)
    }
})


const user = createSlice({
    name: 'users',
    initialState: { user: undefined, token: undefined, requestState: undefined },
    reducers: {
        logout: {
            reducer(state) {
                state.user = undefined
                state.token = undefined
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, { payload }) => {
                console.log('succeess');
                console.log(state, payload);
                state.token = payload.token
                state.user = payload.username
                state.requestState = 'success'


            })
            .addCase(login.pending, (state) => {
                console.log('pending');
                state.requestState = 'pending'

            }).addCase(login.rejected, (state, { payload }) => {
                console.log('rejected');
                console.log(payload);
                console.log(state);
                state.requestState = 'reject'

            })
    }
})
export const{logout}=user.actions
export default user.reducer