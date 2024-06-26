import { createSlice } from '@reduxjs/toolkit'

import type { IGoodsSliceState } from './goods.types';

const initialState: IGoodsSliceState = {
	goods: [],
};

export const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
	},
});

export const {} = goodsSlice.actions;
export default goodsSlice.reducer;
