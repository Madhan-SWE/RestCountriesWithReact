function Search({ searchFn, changeNoOfItems }) {
    function handleOnChanage(event) {
        let searchText = event.target.value;
        searchFn(searchText);
    }

    function handleOnChangeNoOfItems(event) {
        let NoOfItems = event.target.value;
        if (NoOfItems !== "Choose items per page") changeNoOfItems(NoOfItems);
        else changeNoOfItems(6);
    }
    return (
        <div className="row mb-5 mt-5 bg-dark p-2">
            <div className="col-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter search Text Here"
                    onChange={handleOnChanage}
                />
            </div>
            <div className="col-4">
                <select
                    id="inputState"
                    className="form-control"
                    onChange={handleOnChangeNoOfItems}
                >
                    <option selected>Choose items per page</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                </select>
            </div>
        </div>
    );
}

export default Search;
