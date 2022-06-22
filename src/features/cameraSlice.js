import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
  cameraImage: null,
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
 
  reducers: {
    setCameraimage: (state,action) => {   
      state.cameraImage= action.payload;
    },

    resetCameraimage: (state) => {     
        state.cameraImage = null;
      },  
  },
});

export const { setCameraimage,resetCameraimage } = cameraSlice.actions;
export const selectCameraImage = (state) => state.camera.cameraImage;
export default cameraSlice.reducer;
