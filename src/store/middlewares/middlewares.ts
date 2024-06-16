import { thunk } from 'redux-thunk';
import type { Middleware } from '@reduxjs/toolkit';

import { loggerMiddleware } from './logger';

export function getCustomMiddlewares(isDev = false) {
	const middlewares: Array<Middleware> = [thunk];

	if (isDev) {
		middlewares.push(loggerMiddleware);
	}

	return middlewares;
}
