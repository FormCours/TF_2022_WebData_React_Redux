import { useSelector } from 'react-redux';
import './App.css';
import RecetteAddIngre from './containers/recette-add-ingre/recette-add-ingre';
import RecetteDisplay from './containers/recette-display/recette-display';
import RecetteNamer from './containers/recette-namer/recette-namer';

function App() {

  const possedeRecette = useSelector(state => state.recette.name !== null);


  return (
    <div className="App">
      {!possedeRecette ? (
        <RecetteNamer />
      ) : (
        <>
          <RecetteAddIngre />
          <RecetteDisplay />
        </>
      )}
    </div>
  );
}

export default App;
