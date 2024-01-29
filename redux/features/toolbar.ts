import { createSlice } from "@reduxjs/toolkit";
import { TOOLBAR_ITEMS } from "@/lib/constant";

const initialState = {
  activeToolbarItem: TOOLBAR_ITEMS.PENCIL,
  actionToolbarItem: null,
};

export const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    toolbarItemClick: (state, action) => {
      state.activeToolbarItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionToolbarItem = action.payload;
    },
  },
});

export const { toolbarItemClick, actionItemClick } = toolbarSlice.actions;

export default toolbarSlice.reducer;
