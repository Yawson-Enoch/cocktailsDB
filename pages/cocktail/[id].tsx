import Head from 'next/head';
import CocktailDetailsPage from '../../components/content/cocktail-details-page/CocktailDetailsPage';
import { useCocktailsContext } from '../../store/context/CocktailsContext';

const CocktailDetails = () => {
  const { cocktailDetails } = useCocktailsContext();
  return (
    <>
      <Head>
        <meta name='description' content='cocktail details' />
        <meta name='keywords' content='cocktails' />
        <title>{cocktailDetails.cocktailName}</title>
      </Head>
      <CocktailDetailsPage />
    </>
  );
};

export default CocktailDetails;
