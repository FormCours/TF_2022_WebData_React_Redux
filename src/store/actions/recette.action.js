const { createAction } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

// Action créators
// But : Génération d'objet "action" pour le store Redux

// - Ancienne ecriture
/*
const recetteChangerNom = (name) => {
    return {
        type: 'recette/rename',
        payload : name
    };
};
*/

// - Nouvelle ecriture
export const recetteChangerNom = createAction('recette/rename');

export const recetteAjouterIngre = createAction('recette/addIngre', (data) => {
    return {
        payload: {
            id: nanoid(),
            ...data
        }
    }
});

export const recetteRetirerIngre = createAction('recette/removeIngre');