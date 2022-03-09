import { useRouter } from 'next/router';
import { ICocktailProps } from '../../../../../store/context/CocktailsContext';
import { CocktailWrapper } from './Cocktail.styles';

const Cocktail = ({ id, cocktailName, image, info, glass }: ICocktailProps) => {
  const router = useRouter();

  return (
    <CocktailWrapper>
      <div>
        <img src={image} alt={cocktailName} />
      </div>
      <h2>{cocktailName}</h2>
      <p>{glass}</p>
      <p>{info}</p>
      <button type='button' onClick={() => router.push(`/cocktail/${id}`)}>
        SEE DETAILS
      </button>
    </CocktailWrapper>
  );
};

export default Cocktail;
