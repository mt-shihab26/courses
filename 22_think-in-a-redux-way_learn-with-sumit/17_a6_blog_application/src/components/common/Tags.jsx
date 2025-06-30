const Tags = ({ tags }) => {
    return (
        <>
            {tags.map((tag, index) => (
                <span key={index}>
                    #{tag}
                    {index !== tags.length - 1 && ", "}
                </span>
            ))}
        </>
    );
};

export default Tags;
