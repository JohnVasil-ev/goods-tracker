import { useDispatch as useAppDispatch, useSelector as useAppSelector, useStore as useAppStore } from 'react-redux';

import type { RootState } from './reducer';
import type { AppDispatch, AppStore } from './store.types';

export const useStore = useAppStore.withTypes<AppStore>();
export const useSelector = useAppSelector.withTypes<RootState>();
export const useDispatch = useAppDispatch.withTypes<AppDispatch>();
