const ListGroup = ({
    items,
    selectedItem,
    onItemSelect,
    textProperty,
    keyProperty,
}) => {
    const addClasses = (a, b) => {
        return "clickable list-group-item" + (a === b ? " active" : "");
    };

    return (
        <div>
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        className={addClasses(selectedItem, item[textProperty])}
                        key={item[keyProperty]}
                        onClick={() => onItemSelect(item.name)}
                    >
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    keyProperty: "_id",
};

export default ListGroup;
