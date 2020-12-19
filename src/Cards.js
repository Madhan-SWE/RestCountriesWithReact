function Card({ props }) {
    return (
        <div className="col-lg-4 col-sm-6 cols">
            <div className="card text-center text-white bg-dark">
                <div className="card-header">{props.name}</div>
                <img
                    className="card-img-top"
                    src={props.flag}
                    alt={props.name}
                    style={{ height: "180px" }}
                />
                <div className="card-body">
                    <h6>Name : {props.name}</h6>
                    <h6>Native name: {props.nativeName}</h6>
                    <h6>Population: {props.population}</h6>
                    <h6>Region: {props.region}</h6>
                    <h6>Capital: {props.capital}</h6>
                </div>
            </div>
        </div>
    );
}

function Cards(props) {
    let countries = props.countries;
    let itemsPerPage = props.itemsPerPage;
    let currentPage = props.currentPage;

    let end = currentPage * itemsPerPage;

    end = end > countries.length ? countries.length : end;
    let start = (currentPage - 1) * itemsPerPage;
    let countriesObj = countries.slice(start, end);

    if (countries.length === 0) {
        return (
            <div className="row">
                <div className="col-12">
                    <div
                        className="alert alert-danger text-center text-bold "
                        role="alert"
                    >
                        <h5>No results found !</h5>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="row bg-dark p-2">
            <div className="col-12">
                <div
                    className="alert alert-success text-center text-bold "
                    role="alert"
                >
                    <h5>{countries.length} results found</h5>
                </div>
            </div>
            {countriesObj.map((country) => {
                return <Card props={country} key={country.name} />;
            })}
        </div>
    );
}

export default Cards;
