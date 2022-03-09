import { useCocktailsContext } from '../../../../store/context/CocktailsContext';
import Loader from '../../../loader/Loader';
import Cocktail from './cocktail/Cocktail';
import { CocktailsWrapper, CocktailsList } from './CocktailsShowcase.styles';

const CocktailsShowcase = () => {
  const {
    loadingCocktails,
    cocktails,
    cocktailsFetchError,
    cocktailsFetchErrorMessage,
  } = useCocktailsContext();

  if (loadingCocktails) {
    return <Loader />;
  }

  if (cocktailsFetchError) {
    return (
      <h2 style={{ textAlign: 'center' }}>{cocktailsFetchErrorMessage}</h2>
    );
  }

  if (cocktails.length <= 0) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <CocktailsWrapper>
      <h1>COCKTAILS</h1>
      <CocktailsList>
        {cocktails?.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </CocktailsList>
    </CocktailsWrapper>
  );
};

export default CocktailsShowcase;
