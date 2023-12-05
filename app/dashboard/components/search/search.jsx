import { MdSearch } from "react-icons/md";

const Search = ({placeholder}) => {
  return (
    <label htmlFor="searching" className="gap-[10px] rounded-md w-max p-[10px]">
      <MdSearch size={24}/>
      <input type="text" id="searching" placeholder={placeholder} className="bg-transparent outline-none" />
    </label>
  );
}

export default Search;