import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modals from '../reducers/modals';

export const store = configureStore({
  reducer: {
    modals,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
