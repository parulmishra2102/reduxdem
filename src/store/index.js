import { configureStore, createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: ["jkl"],

  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {}
  }
});

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer
  }
});
const startingState = store.getState();
console.log(JSON.stringify(startingState));
store.dispatch(movieSlice.actions.addMovie("aye hai"));
console.log(JSON.stringify(store.getState()));

export { store };
export const { addMovie } = movieSlice.actions;
