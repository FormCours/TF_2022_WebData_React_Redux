import { useSelector } from 'react-redux';

const RecetteDisplay = () => {

    const name = useSelector(state => state.recette.name);
    const ingredients = useSelector(state => state.recette.ingre);

    const ingreRender = ingredients.map(ingre => (
        <li key={ingre.id}>{ingre.name}</li>
    ));

    return (
        <>
            <h2>Recette : {name}</h2>
            <ul>
                {ingreRender}
            </ul>
        </>
    );
};

export default RecetteDisplay;