import { Search } from 'lucide-react';

export type SearchBarProps = {
  className?: string;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <form className={'hidden items-center gap-2 rounded-lg shadow-xl ' + props.className}>
      <Search className="ml-3 my-3 text-gray-900" />
      <input
        type="text"
        placeholder="Search your product"
        className="p-4 w-full outline-none text-lg font-semibold font-montserrat placeholder-gray-800 text-gray-900"
      />
    </form>
  );
}