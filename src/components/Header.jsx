import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import fullLogo from '../images/moviedom_logo.png';
import smallLogo from '../images/moviedom_poster_small.png';

const Header = ({ query, onQueryChange, onSearch }) => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeHref = import.meta.env.BASE_URL || '/';

  return (
    <header className={`site-header ${isCompact ? 'site-header--compact' : ''}`}>
      <a className="site-header__brand" href={homeHref} aria-label="MovieDom home">
        <img src={isCompact ? smallLogo : fullLogo} alt="MovieDom" />
      </a>
      <SearchBar query={query} onQueryChange={onQueryChange} onSearch={onSearch} />
    </header>
  );
};

export default Header;
