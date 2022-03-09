import { FormEvent, useEffect, useRef } from 'react';
import { useCocktailsContext } from '../../../../store/context/CocktailsContext';
import { Form, FormControl, SearchInput } from './SearchForm.styles';

const SearchForm = () => {
  const { setSearchTerm, cocktailsFetchError } = useCocktailsContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  const onInputChange = () => {
    setSearchTerm(inputRef.current!.value);
  };

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <Form onSubmit={submitHandler}>
      <FormControl>
        <label htmlFor='search'>Search Your Favorite Cocktails</label>
        <SearchInput
          valid={cocktailsFetchError}
          ref={inputRef}
          onChange={onInputChange}
          type='text'
          id='search'
          name='search'
        />
      </FormControl>
    </Form>
  );
};

export default SearchForm;
