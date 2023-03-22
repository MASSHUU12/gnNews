import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    headerMenuEnabled: false,
  },
  reducers: {
    disableMenus: (state) => {
      state.headerMenuEnabled = false;
    },
    setHeaderMenu: (state, action: PayloadAction<boolean>) => {
      state.headerMenuEnabled = action.payload;
    },
  },
});

export const { disableMenus, setHeaderMenu } = popupSlice.actions;
export default popupSlice.reducer;
