import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { recetteChangerNom } from '../../store/actions/recette.action';

const RecetteNamer = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleNameSubmit = (e) => {
        e.preventDefault();
        setName('');

        // Envoyer le nom dans le store
        dispatch(recetteChangerNom(name));
    };

    return (
        <>
            <h2>Nom de la recette : </h2>
            <form onSubmit={handleNameSubmit}>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button type="submit">Valider</button>
            </form>
        </>
    );
};

export default RecetteNamer;