import CocktailsShowcase from './cocktails-showcase/CocktailsShowcase';
import { HomePageWrapper } from './HomePage.styles';
import SearchForm from './search-form/SearchForm';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SearchForm />
      <CocktailsShowcase />
    </HomePageWrapper>
  );
};

export default HomePage;
