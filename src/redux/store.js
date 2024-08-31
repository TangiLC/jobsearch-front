import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";
import idReducer from "./idSlice";

const store = configureStore({
	reducer: {
		jobs: jobReducer,
		jobId: idReducer,
	},
});

export default store;
