import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLink, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';

const OwnLinkModal = ({ setOpen }) => {
    const [linkFields, setLinkFields] = useState(["link1"]);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


    // Add a new link input (max 3)
    const handleAddMore = () => {
        if (linkFields.length < 3) {
            setLinkFields([...linkFields, `link${linkFields.length + 1}`]);
        }
    };

    const onSubmit = async (data) => {
        const linkData = {
            // user: null,
            name: data.linkName,
            links: linkFields.map((field) => data[field]).filter(Boolean)
        };

        try {
            const response = await axios.post("http://localhost:5000/api/links", linkData);
            console.log(response.data);
            setOpen(false);
        } catch (error) {
            console.error("Error adding link:", error);
        }
    };

    return (
        <dialog id="own_link_modal" className="modal" open>
            <div className="modal-box w-96 bg-white rounded-md border border-orange-200">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button
                        type="button"
                        className="btn btn-sm btn-ghost absolute right-2 top-2"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                    <div className='pb-2 flex justify-center text-2xl text-orange-500 font-bold gap-2'>
                        Add Your Own Links <FaLink />
                    </div>

                    {/* Site Name Field */}
                    <div className="w-full">
                        <label className="text-sm font-semibold text-gray-700">Site Name</label>
                        <input
                            {...register("linkName", { required: "Site Name is Required!" })}
                            type="text"
                            className="h-10 border bg-gray-100 border-orange-500 rounded-md w-full pl-2 text-orange-500"
                        />
                        {errors.linkName && <p className='text-red-500 text-sm'>{errors.linkName.message}</p>}
                    </div>

                    {/* Dynamic Link Fields */}
                    {linkFields.map((link, index) => (
                        <div key={index} className="w-full mt-2">
                            <label className="text-sm font-semibold text-gray-700">Link {index + 1}</label>
                            <input
                                {...register(link)}
                                type="url"
                                className="h-8 border border-orange-500 bg-gray-100 rounded-md w-full pl-2 text-blue-400"
                            />
                        </div>
                    ))}

                    {/* Add More Button (Only shows if less than 3 links) */}
                    {linkFields.length < 3 && (
                        <div className="flex justify-center mt-2">
                            <button
                                type="button"
                                className="text-orange-500 flex items-center gap-2 border border-orange-500 rounded-md px-3 py-1"
                                onClick={handleAddMore}
                            >
                                <FaPlusCircle /> Add More
                            </button>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div>
                        <input
                            type="submit"
                            value="Add"
                            className='mt-4 bg-orange-500 w-full text-white font-semibold h-10 rounded-md cursor-pointer'
                        />
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default OwnLinkModal;
