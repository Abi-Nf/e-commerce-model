import { Bell, Filter, Menu } from 'lucide-react';
import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <header className="py-2 px-3 flex justify-between items-center">
      <button className="p-1">
        <Menu />
      </button>

      <div className="flex items-center gap-2">
        <SearchBar className="sm:flex sm:shadow-none" />

        <button className="p-1 relative flex-shrink-0">
          <Bell />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </button>

        <button className="p-1 flex-shrink-0">
          <Filter />
        </button>
      </div>
    </header>
  )
}