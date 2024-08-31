import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
	name: "jobId",
	initialState: {
		value: null,
	},
	reducers: {
		setJobId: (state, action) => {
			state.value = action.payload;
		},
		clearJobId: (state) => {
			state.value = null;
		},
	},
});

export const { setJobId, clearJobId } = idSlice.actions;
export default idSlice.reducer;
