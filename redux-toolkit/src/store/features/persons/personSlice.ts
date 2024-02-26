import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";

export const initialState = {

}

export const personSlice = createSlice({
    name:"person",
    initialState,
    reducers:{

    },
});

export const {} = personSlice.actions;
export default personSlice.reducer;