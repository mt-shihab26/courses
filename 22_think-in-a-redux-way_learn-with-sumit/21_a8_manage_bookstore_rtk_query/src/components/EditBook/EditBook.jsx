import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import EditForm from "./EditForm";

const EditBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError, error } = useGetBookQuery(id);

    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    {isLoading ? (
                        <>Loading...</>
                    ) : isError ? (
                        error.message
                    ) : (
                        <EditForm book={book} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default EditBook;
