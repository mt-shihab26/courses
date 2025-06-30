const SearchBox = ({searchString, onSearch}) => {
    const handleChange = ({currentTarget: input}) => {
        onSearch(input.value, true);
    }

    return (
        <div>
            <input
                className="form-control my-4"
                name="searchString"
                value={searchString}
                placeholder="Search Anything ..."
                onChange={handleChange}
                onClick={handleChange}
            />
        </div>
    )
}

export default SearchBox;