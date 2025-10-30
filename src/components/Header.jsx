import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Logo text="Header Logo" />
      <Search text="Search Component" />
    </header>
  );
}

export default Header;