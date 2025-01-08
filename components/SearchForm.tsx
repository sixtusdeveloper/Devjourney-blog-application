import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl py-2 text-gray-600 text-center">
        Search for articles here 🚀
      </h2>
      <Form
        action="/"
        scroll={false}
        className="flex items-center max-w-2xl relative mx-auto justify-center ring-1 rounded-lg searchform"
      >
        <input
          name="query"
          defaultValue={query}
          className="w-full px-4 py-3 rounded-lg focus:outline-none rounded-l-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Search by title or technology"
        />

        <div className="flex items-center gap-2">
          {query && <SearchFormReset />}
          <button
            type="submit"
            className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-r-lg"
          >
            <Search size={24} />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
