import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './slices/app';
import { goodsReducer } from './slices/goods';

export const reducer = combineReducers({
	app: appReducer,
	goods: goodsReducer,
});

export type RootState = ReturnType<typeof reducer>;
