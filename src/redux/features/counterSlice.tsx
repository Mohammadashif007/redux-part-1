import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterType = {
    count: number;
}

const initialState: counterType = {count: 0}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action:PayloadAction<number>) => {
            state.count += action.payload
        },
        decrement: (state) => {
            state.count -=1
        },
        decrementByValue: (state, action) => {
            state.count -= action.payload
        }
    }

});

// export const { increment, decrement } = counterSlice.actions;

export const {increment, decrement, decrementByValue} = counterSlice.actions;

export default counterSlice.reducer;
