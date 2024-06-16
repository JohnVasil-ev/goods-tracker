import { configureStore } from '@reduxjs/toolkit';

import { env } from '@/app/shared/utils';

import { getCustomMiddlewares } from './middlewares';
import { reducer } from './reducer';

export function configureAppStore() {
	const store = configureStore({
		reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(...getCustomMiddlewares(env.isDev)),
		devTools: env.isDev,
	});

	return store;
}
