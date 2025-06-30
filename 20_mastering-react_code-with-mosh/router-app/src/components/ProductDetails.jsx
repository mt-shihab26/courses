export default ({ match, history }) => {
    const handleSave = () => {
        // Navigate to /products
        // history.push("/products");
        history.replace("/products");
    };

    return (
        <div>
            <h1>Product Details - {match.params.id}</h1>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};
