import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  fullName: '',
  phoneNumber: '',
  deliveryAddress: '',
  nearestLandmark: '',
  email: '',
  deliveryInstructions: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
