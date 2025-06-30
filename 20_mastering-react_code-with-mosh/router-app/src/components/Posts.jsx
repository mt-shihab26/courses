import queryString from "query-string";

export default ({ history, location, match }) => {
    // console.log("History: ", history);
    // console.log("Location: ", location);
    // console.log("Match: ", match);

    const { sortBy, approved } = queryString.parse(location.search);
    console.log(sortBy, approved);

    const { year, month } = match.params;
    return (
        <div>
            <h1>Posts</h1>
            Year: {year}, Month: {month}
        </div>
    );
};
