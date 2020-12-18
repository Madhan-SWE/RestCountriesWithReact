function Pagination({countries, itemsPerPage, currentPage}) {

    function handleOnChanage(event){
        let searchText = event.target.value
        searchFn(searchText)
    }
    
}

export default Search;
