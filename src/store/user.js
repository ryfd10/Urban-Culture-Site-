import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk('login/user', async ({ username, password }, { rejectWithValue }) => {
    try {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        console.log({ username, password });
        const response = await fetch('http://127.0.0.1:8080/users/login', {
            body: JSON.stringify({ username, password }),
            method: 'POST',
            headers: myHeaders
        })
        console.log(response);
        return response
    }
    catch (error) {
        rejectWithValue(error)
    }
})


const user = createSlice({
    name: 'users',
    initialState: { user: undefined, token: undefined },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (payload) => {
                console.log('succeess');
                console.log(payload);

            })
            .addCase(login.pending, () => {
                console.log('pending');

            }).addCase(login.rejected, (payload) => {
                console.log('rejected');
                console.log(payload);

            })
    }
})

export default user.reducer