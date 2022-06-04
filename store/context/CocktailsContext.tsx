import { useRouter } from 'next/router';
import { createContext, FC, useContext, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

interface ICocktailAndDetailsProps {
  cocktailName: string;
  image: string;
  info: string;
  glass: string;
}

export interface ICocktailProps extends ICocktailAndDetailsProps {
  id: string;
}

type Ingredients = [
  ingredient1: string,
  ingredient2: string,
  ingredient3: string,
  ingredient4: string,
  ingredient5: string
];

export interface ICocktailDetailsProps extends ICocktailAndDetailsProps {
  category: string;
  instructions: string;
  ingredients: Ingredients;
}

interface ICocktailsAppProps {
  loadingCocktails: boolean;
  loadingCocktailDetails: boolean;
  cocktailsFetchError: boolean;
  cocktailsFetchErrorMessage: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  cocktails: ICocktailProps[];
  cocktailDetails: ICocktailDetailsProps;
}

const CocktailsContext = createContext({} as ICocktailsAppProps);

const CocktailsContextProvider: FC = ({ children }) => {
  const router = useRouter();
  const { id } = router?.query;

  const [loadingCocktails, setLoadingCocktails] = useState<boolean>(false);
  const [loadingCocktailDetails, setLoadingCocktailDetails] =
    useState<boolean>(false);
  const [cocktailsFetchError, setCocktailsFetchError] =
    useState<boolean>(false);
  const [cocktailsFetchErrorMessage, setCocktailsFetchErrorMessage] =
    useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('a');
  const [cocktails, setCocktails] = useState<ICocktailProps[]>(
    [] as ICocktailProps[]
  );
  const [cocktailDetails, setCocktailDetails] = useState<ICocktailDetailsProps>(
    {} as ICocktailDetailsProps
  );

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setLoadingCocktails(true);
        const response = await fetch(`${url}${searchTerm}`);

        if (!response.ok) {
          setCocktailsFetchError(true);
          setCocktailsFetchErrorMessage(
            `Something went wrong ${response.status}`
          );
          throw new Error(`Something went wrong ${response.status}`);
        }

        const { drinks } = await response.json();
        if (!drinks) {
          setCocktails([]);
        }
        const availableDrinks: ICocktailProps[] = drinks?.map((drink: any) => {
          const {
            idDrink: id,
            strDrink: cocktailName,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
          } = drink;

          return {
            id,
            cocktailName,
            image,
            info,
            glass,
          } as ICocktailProps;
        });
        setCocktails(availableDrinks);
      } catch (error: any) {
        setCocktailsFetchError(true);
        setCocktailsFetchErrorMessage(error.message);
      } finally {
        setLoadingCocktails(false);
      }
    };
    fetchCocktails();
  }, [searchTerm]);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        setLoadingCocktailDetails(true);
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!response.ok) {
          throw new Error(`Something went wrong ${response.status}`);
        }

        const data = await response.json();

        if (!data?.drinks) {
          setCocktailDetails({} as ICocktailDetailsProps);
        }

        const {
          strDrink: cocktailName,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1: ingredient1,
          strIngredient2: ingredient2,
          strIngredient3: ingredient3,
          strIngredient4: ingredient4,
          strIngredient5: ingredient5,
        } = data.drinks[0];
        const ingredients = [
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
          ingredient5,
        ];

        const newDrinks = {
          cocktailName,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        } as ICocktailDetailsProps;
        setCocktailDetails(newDrinks);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoadingCocktailDetails(false);
      }
    };
    fetchCocktailDetails();
  }, [id]);

  const cocktailsContextValues: ICocktailsAppProps = {
    loadingCocktails,
    loadingCocktailDetails,
    setSearchTerm,
    cocktails,
    cocktailDetails,
    cocktailsFetchError,
    cocktailsFetchErrorMessage,
  };

  return (
    <CocktailsContext.Provider value={cocktailsContextValues}>
      {children}
    </CocktailsContext.Provider>
  );
};

const useCocktailsContext = () => useContext(CocktailsContext);

export { CocktailsContextProvider, useCocktailsContext };
