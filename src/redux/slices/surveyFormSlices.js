import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const surveyFormSlice = createSlice({
    name: "surveyResult",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },

        removeData: (state, action) => {
            state.data.splice(action.payload, 1);
        },
    },
});

export const { addData, removeData } = surveyFormSlice.actions;

export default surveyFormSlice.reducer;