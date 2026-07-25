import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GPT",
    initialState: {
        ShowGptPage: false,
        MovieSuggestion: [],
    },
    reducers: {
        toggleShowGptPage : (state) => {
            state.ShowGptPage = !state.ShowGptPage;
        },
        addMovieSuggestion: (state , action) =>{
            state.MovieSuggestion = action.payload;
        } 
    }
});

export const { toggleShowGptPage  , addMovieSuggestion} = GptSlice.actions;
export default GptSlice.reducer;