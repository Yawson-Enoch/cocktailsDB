import { useCocktailsContext } from '../../../store/context/CocktailsContext';
import Loader from '../../loader/Loader';
import {
  CocktailDetailsWrapper,
  CocktailDetailsContent,
  CocktailDetailsList,
} from './CocktailDetailsPage.styles';

const CocktailDetailsPage = () => {
  const { loadingCocktailDetails, cocktailDetails } = useCocktailsContext();

  const {
    cocktailName,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktailDetails;

  if (loadingCocktailDetails) {
    return <Loader />;
  }

  if (!cocktailDetails) {
    return <h1 style={{ textAlign: 'center' }}>No Cocktail To Display</h1>;
  }

  return (
    <CocktailDetailsWrapper>
      <h1>{cocktailName}</h1>

      <CocktailDetailsContent>
        <div>
          <img src={image} alt={cocktailName} />
        </div>

        <CocktailDetailsList>
          <li>
            <p>cocktailName:</p>
            <p>{cocktailName}</p>
          </li>
          <li>
            <p>category:</p>
            <p>{category}</p>
          </li>
          <li>
            <p>info:</p>
            <p>{info}</p>
          </li>
          <li>
            <p>glass:</p>
            <p>{glass}</p>
          </li>
          <li>
            <p>instructions:</p>
            <p>{instructions}</p>
          </li>
          <li>
            <p>ingredients:</p>
            <p>
              {ingredients?.map((ingredient, index) => {
                return ingredient ? <span key={index}> {ingredient}</span> : '';
              })}
            </p>
          </li>
        </CocktailDetailsList>
      </CocktailDetailsContent>
    </CocktailDetailsWrapper>
  );
};

export default CocktailDetailsPage;
