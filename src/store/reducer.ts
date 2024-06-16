import { combineReducers } from '@reduxjs/toolkit';

import { goodsReducer } from './slices/goods';

export const reducer = combineReducers({
	goods: goodsReducer,
});

export type RootState = ReturnType<typeof reducer>;
