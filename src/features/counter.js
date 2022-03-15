import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//initial state
const initialState = {
  count: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//managecount 
export const managecount = createAsyncThunk(
  "counter/manage",
  async (newCount, thunkAPI) => {
    try {
      //pass newcount(we will get it on action.payload )..
      return newCount || 0;
    } catch (error) {
      const message = "some error occured";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//count slice
export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(managecount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(managecount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.count = action.payload;
      })
      .addCase(managecount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.count = 0;
      });
  },
});

//export auth slice reset function
export const { reset } = countSlice.actions;

//export the auth slice
export default countSlice.reducer;
