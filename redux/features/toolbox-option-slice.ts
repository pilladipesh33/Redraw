import { TOOLBAR_ITEMS, colors } from "@/lib/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  [TOOLBAR_ITEMS.PENCIL]: {
    color: colors.black.value,
    size: 3,
  },
  [TOOLBAR_ITEMS.ERASER]: {
    color: colors.white.value,
    size: 3,
  },
  [TOOLBAR_ITEMS.REDO]: {},
  [TOOLBAR_ITEMS.UNDO]: {},
  [TOOLBAR_ITEMS.DOWNLOAD]: {},
};

export const toolbarOptionSlice = createSlice({
  name: "toolbarOption",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item].color = action.payload.color;
    },
    changeBrushSize: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeBrushSize } = toolbarOptionSlice.actions;

export default toolbarOptionSlice.reducer;
