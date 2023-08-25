import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({ 
    name: "filter",
    initialState: "",
    reducers: {
        handleFilterChange(state, action) {
            return action.payload
        },
    }
})

export const { handleFilterChange } = filterSlice.actions;

export default filterSlice.reducer;