const SectionLayout = ({ children, title }) => {
    return (
        <div>
            <h1 className="mb-10 text-center lws-section-title">{title}</h1>
            <div className="max-w-3xl mx-auto">{children}</div>
        </div>
    );
};

export default SectionLayout;
