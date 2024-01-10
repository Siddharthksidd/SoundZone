import React, { useContext, useRef } from 'react'
import commonContext from '../context/common/commonContext'
import productsData from '../data/productsData'
import { Link } from 'react-router-dom';
import useOutsideClose from '../hooks/useOutsideClose';
import useScrollDisable from '../hooks/useScrollDisable';

const SearchBar = () => {

    const { isSearchOpen, toggleSearch, searchResults, setSearchResults } = useContext(commonContext);

    const searchRef = useRef();

    // closing the SearchBar
    const closeSearch = () => {
        toggleSearch(false);
        setSearchResults([]);
    };

    useOutsideClose(searchRef, closeSearch);

    useScrollDisable(isSearchOpen);

    const handleSearching = (e) => {
        const searchedTerm = e.target.value.toLowerCase().trim();
        console.log(searchedTerm);
        const updatedSearchResults = productsData.filter(item => item.title.toLowerCase().includes(searchedTerm));

        searchedTerm === '' ? setSearchResults([]) : setSearchResults(updatedSearchResults);
    };

  return (
    <>
    {
        isSearchOpen && (
            <div id="searchbar" className="backdrop">
                <div className="searchbar_content" ref={searchRef}>
                    <div className="search_box">
                        <input
                            type="search"
                            className="input_field"
                            placeholder="Search for product..."
                            onChange={handleSearching}
                        />
                    </div>

                    {
                        searchResults.length !== 0 && (
                            <div className="search_results">
                                {
                                    searchResults.map(item => {
                                        const { id, title, path } = item;
                                        return (
                                            <Link
                                                to={`${path}${id}`}
                                                onClick={closeSearch}
                                                key={id}
                                            >
                                                {title}
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
    </>
  )
}

export default SearchBar