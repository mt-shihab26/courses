import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { TAddVideo, useAddVideoMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

const initialFormData = {
    title: "",
    description: "",
    author: "",
    date: "",
    duration: "",
    views: "",
    link: "",
    thumbnail: "",
};

type HandleInputChange = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
type HandleSubmit = FormEventHandler<HTMLFormElement>;

const Form = () => {
    const [formData, setFormData] = useState<TAddVideo>(initialFormData);
    const [addVideo, { data: video, isLoading, isError, isSuccess, error }] =
        useAddVideoMutation();

    const resetFormData = () => {
        setFormData(initialFormData);
    };

    const handleInputChange: HandleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit: HandleSubmit = async event => {
        event.preventDefault();
        addVideo(formData);
        resetFormData();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                title="Video title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                title="Author"
                                onChange={handleInputChange}
                                name="author"
                                value={formData.author}
                            />
                        </div>

                        <div className="col-span-6">
                            <TextArea
                                title="Description"
                                onChange={handleInputChange}
                                name="description"
                                value={formData.description}
                            />
                        </div>

                        <div className="col-span-6">
                            <TextInput
                                title="YouTube Video link"
                                onChange={handleInputChange}
                                name="link"
                                value={formData.link}
                            />
                        </div>

                        <div className="col-span-6">
                            <TextInput
                                title="Thumbnail link"
                                onChange={handleInputChange}
                                value={formData.thumbnail}
                                name="thumbnail"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput
                                title="Upload Date"
                                onChange={handleInputChange}
                                value={formData.date}
                                name="date"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                title="Video Duration"
                                onChange={handleInputChange}
                                value={formData.duration}
                                name="duration"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                title="Video no of views"
                                onChange={handleInputChange}
                                value={formData.views}
                                name="views"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {isSuccess && <Success message="Video was added successfully" />}
                {isError && <Error message="There was an error adding video!" />}
            </div>
        </form>
    );
};

export default Form;
