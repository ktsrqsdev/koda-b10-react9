import { configureStore } from "@reduxjs/toolkit";
import surveyFormReducer from "./slices/surveyFormSlices.js";

const store = configureStore({
    reducer: {
        surveyResult: surveyFormReducer,
    },
});

export default store;