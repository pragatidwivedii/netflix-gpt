import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GPT",
    initialState: {
        ShowGptPage: false,
        MovieSuggestion: [],
        showResult: false,
    },
    reducers: {
        toggleShowGptPage : (state) => {
            state.ShowGptPage = !state.ShowGptPage;
        },
        addMovieSuggestion: (state , action) =>{
            state.MovieSuggestion = action.payload;
        },
        setshowResult : (state , action) => {
            state.showResult = action.payload;
        }, 
    }
});

export const { toggleShowGptPage  , addMovieSuggestion , setshowResult} = GptSlice.actions;
export default GptSlice.reducer;