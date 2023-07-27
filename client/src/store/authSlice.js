import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServicesActions from "./authActions";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:user ? user : null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}

export const register = createAsyncThunk('admin/register', async function(user, thunkAPI){
    try{
        return await authServicesActions.registerAction(user)

    }catch(err){
       const message = (err.response && err.response.data && err.response.data.message) || err.message|| err
       
        return thunkAPI.rejectWithValue(message)
    }
})


export const logout = createAsyncThunk('admin/logout', async function(){
    await authServicesActions.logoutAction()
})


export const login = createAsyncThunk('admin/login', async function(user, thunkAPI){
    try{
        return await authServicesActions.loginAction(user)
    }catch(err){
        const message = (err.response && err.response.data && err.response.data.message) || err.message|| err
       
        return thunkAPI.rejectWithValue(message)
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.isLoading = false
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state, action)=>{
            state.isLoading = false
            state.user = action.payload.user
            state.isSuccess = true
        })
        .addCase(login.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.message = action.payload
        })
        .addCase(logout.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(logout.fulfilled,(state=>{
            state.isLoading = false
            state.user = null
        }))
    }
})

export const authActions = authSlice.actions
export default authSlice