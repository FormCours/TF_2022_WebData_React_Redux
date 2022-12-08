import { createReducer } from '@reduxjs/toolkit';
import { recetteAjouterIngre, recetteChangerNom, recetteRetirerIngre } from '../actions/recette.action';

// Définition de l'état initial des données "Recette"
const initialState = {
    name: null,
    ingre: []
};

// Exemple de Reducer "Ecriture sans faire de mutation"
// ****************************************************
/*
const recetteReducer = createReducer(initialState, builder => {
    builder
        .addCase(recetteChangerNom, (state, action) => {
            // Renvoi la nouvelle version du state
            return {
                ...state,
                name: action.payload
            }
        })
        .addCase(recetteAjouterIngre, (state, action) => {
            return {
                ...state,
                ingre: [...state.ingre, action.payload]
            }
        })
        .addCase(recetteRetirerIngre, (state, action) => {
            const id = action.payload;
            return {
                ...state,
                ingre : state.ingre.filter(ingredient => ingredient.id !== id)
            }
        })
});
*/


// Exemple de Reducer en utilisant "Immer"
// ***************************************
const recetteReducer = createReducer(initialState, builder => {
    builder
        .addCase(recetteChangerNom, (state, action) => {
            // Utilisation de l'ecriture mutative grace à "Immer"
            // Attention : Ne jamais utiliser "return" dans ce cas.
            state.name = action.payload;
        })
        .addCase(recetteAjouterIngre, (state, action) => {
            state.ingre.push(action.payload);
        })
        .addCase(recetteRetirerIngre, (state, action) => {
            const id = action.payload;
            state.ingre = state.ingre.filter(ingredient => ingredient.id !== id)
        })
});

export default recetteReducer;