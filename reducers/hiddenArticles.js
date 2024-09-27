import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value : []
};

export const hiddenArticleSlice = createSlice({
    name: 'hiddenArticle',
    initialState,
    reducers: {
        addHiddenArticle: (state, action) => {
            state.value.push(action.payload)
        },
        addAllArticle: (state) => {
            state.value = []
        }
    },
  });
  
  export const { addHiddenArticle, addAllArticle } = hiddenArticleSlice.actions;
  export default hiddenArticleSlice.reducer;
  