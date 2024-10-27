import { createSlice } from "@reduxjs/toolkit";

const GenderSlice = createSlice({
  name: "genders",
  initialState: {
    category: "All",
  },
  reducers: {
    setGender: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setGender } = GenderSlice.actions;
export default GenderSlice.reducer;
