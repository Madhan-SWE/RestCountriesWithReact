import { useState, useEffect } from "react";
import Header from "./Header.js";
import Cards from "./Cards.js";
import Search from "./Search.js";
import Pagination from "./Pagination.js";

function App() {
    const [countries, setCountries] = useState([]);
    const [countriesAll, setCountriesAll] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPersPage] = useState(6);

    const changeOnSearch = (searchText) => {
        let res = countries.filter((country) => {
            return JSON.stringify(country)
                .toLowerCase()
                .includes(searchText.toLowerCase());
        });
        setCurrentPage(1);
        setCountriesAll(res);
    };

    const changePage = (event) => {
        let changedPage = event.target.innerText;

        if (changedPage === "Next") {
            setCurrentPage(currentPage + 1);
        } else if (changedPage === "Previous") {
            setCurrentPage(currentPage - 1);
        } else {
            changedPage = parseInt(changedPage);
            setCurrentPage(changedPage);
        }
    };

    const changeNoOfItems = (value) => {
        setCurrentPage(1);
        setItemsPersPage(value);
    };
    function doFetch() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((res) => {
                setCountries(res);
                setCountriesAll(res);
            });
    }

    useEffect(doFetch, []);

    return (
        <div className="App pb-3">
            <Header />

            <Search
                searchFn={changeOnSearch}
                changeNoOfItems={changeNoOfItems}
            />
            <Cards
                countries={countriesAll}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
            />
            <Pagination
                countries={countriesAll}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                changePage={changePage}
            />
        </div>
    );
}

export default App;
