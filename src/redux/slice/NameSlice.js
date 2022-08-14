import { createSlice } from "@reduxjs/toolkit";
import { data, data2, data3 } from "./Data";

const initState = {
  nameAuth: data,
  activeAuth: {},
  activeAudio:
    "https://d1.islamhouse.com/data/ar/ih_quran/Sherzaad_Taher/ar_001_Sherzaad_Taher.mp3",
};
const NameSorah = createSlice({
  name: "NameSorah",
  initialState: initState,
  reducers: {
    active(state, action) {
      state.activeAuth = state.nameAuth[action.payload];
    },

    activeAudio(state, action) {
      state.activeAudio = action.payload;
    },
    addT(state, action) {
      state.nameAuth = data;
    },
    addMo(state, action) {
      state.nameAuth = data2;
    },

    addH(state, action) {
      state.nameAuth = data3;
    },
  },
});
export const { active, activeAudio, addMo, addT, addH } = NameSorah.actions;
export default NameSorah.reducer;
