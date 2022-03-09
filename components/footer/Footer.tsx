import { FooterWrapper, FooterContent } from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterContent>
        <p>
          &copy; <span>{year}</span>
        </p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
