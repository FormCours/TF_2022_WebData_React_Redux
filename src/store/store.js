import { configureStore } from '@reduxjs/toolkit';
import recetteReducer from './reducers/recette.reducer';

const store = configureStore({
    reducer: {
        recette: recetteReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;