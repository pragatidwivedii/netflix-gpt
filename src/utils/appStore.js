import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./movieSlice.js";
import GPTReducer from "./GptSlice.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        GPT: GPTReducer,
    }
})

export default appStore;