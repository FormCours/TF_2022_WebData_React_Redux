import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { recetteAjouterIngre } from '../../store/actions/recette.action';


const RecetteAddIngre = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset, setFocus } = useForm({
        defaultValues: { name: '', quantity: '' }
    });

    const handleIngreSubmit = (data) => {
        console.log('Donnée du formulaire', data);
        dispatch(recetteAjouterIngre(data));

        setFocus('name')
        reset();
    }

    return (
        <>
            <h2>Formulaire pour ajouter un ingrédient</h2>
            <form onSubmit={handleSubmit(handleIngreSubmit)}>
                <div>
                    <label htmlFor="">Nom : </label>
                    <input type="text" {...register('name')} />
                </div>
                <div>
                    <label htmlFor="">Quantité : </label>
                    <input type="text" {...register('quantity')} />
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </>
    );
};

export default RecetteAddIngre;