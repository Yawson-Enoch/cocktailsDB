import Link from 'next/link';
import {
  HeaderContent,
  NavLinks,
  HeaderWrapper,
  LogoWrapper,
} from './Header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoWrapper>
          <Link href='/'>
            <a>
              <p>TheCocktailsDB</p>
            </a>
          </Link>
        </LogoWrapper>
        <nav>
          <NavLinks>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </NavLinks>
        </nav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
