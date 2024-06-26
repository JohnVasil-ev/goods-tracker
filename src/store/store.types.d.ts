import { configureAppStore } from './store';

export type AppStore = ReturnType<typeof configureAppStore>;
export type AppDispatch = AppStore['dispatch'];
