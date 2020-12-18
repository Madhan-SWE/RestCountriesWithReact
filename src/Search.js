

function Search({searchFn}) {

    function handleOnChanage(event){
        let searchText = event.target.value
        searchFn(searchText)

    }
    return (
        <div className="row mb-5 mt-5 bg-dark p-2">
            <div className="col-8">
        <input type="text" className="form-control" placeholder="Enter search Text Here" onChange={handleOnChanage} />

        </div>
        <div className="col-4">
        <button type="submit" className="btn btn-primary btn-block">Search</button>
        </div>
        </div>
    )
    
}

export default Search;
