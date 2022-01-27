import { configureStore } from '@reduxjs/toolkit';
import Count from './counter/Count';

export default configureStore({
  reducer: {
      counter:Count
  }
})