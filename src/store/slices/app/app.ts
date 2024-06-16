import { createSlice } from '@reduxjs/toolkit'

import type { IAppSliceState } from './app.types';

const initialState: IAppSliceState = {
	platform: 'ios',
	appearance: 'dark',
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleTheme(state) {
			return {
				...state,
				appearance: state.appearance === 'dark' ? 'light' : 'dark',
			};
		},
	},
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;
