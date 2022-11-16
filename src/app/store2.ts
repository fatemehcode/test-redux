import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';

const initialState={value:{username:""}};

const userSlice=createSlice({
  name:"user",
  initialState,
  reducers: {
    login:(state,action)=>{state.value = action.payload;},
    logout:(state)=>{state.value=initialState.value;},    
  },
});

export const {login,logout} = userSlice.actions;
export const store2 = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type AppDispatch = typeof store2.dispatch;
export type RootState = ReturnType<typeof store2.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;