import React from 'react';
import { useForm } from 'react-hook-form';
import { FaLink } from 'react-icons/fa6';

const OwnLinkModal = ({setOpen}) => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // const socialLinkData = [
            //     {
                //         user: null,
                //         name: modalName,
                //         url: data?.socialURL,
                //     }
                // ]
                // console.log(socialLinkData);
                setOpen(false);
    };

    React.useEffect(() => {
        setError("ownURL", {
          type: "manual",
          message: "",
        })
      }, [setError])

    return (
            <dialog id="own_link_modal" className="modal" open>
                <div className="modal-box w-96 bg-white rounded-md border border-orange-200">
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <button
                            type="button"
                            className="btn btn-sm btn-ghost absolute right-2 top-2"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                        <div className='pb-2 flex justify-center text-2xl text-orange-500 font-bold gap-2'>Add Your Own Links <FaLink/> </div>
                        <div className="w-full">
                            <label className="text-sm font-semibold text-center text-gray-700">
                                Site Name
                            </label>
                            <input
                                {...register("name", { required: "Site Name is Required !!" })}
                                type='url'
                                className="h-10 border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
                                // placeholder={`https://www.${modalName && modalName.toLowerCase()}.com`}
                            />
                            {
                                (errors && errors.name) && 
                                <p className='text-[#FF3333] text-sm text-center'>{errors.name.message}</p>
                            }
                        </div>

                        <div className="w-full mt-4">
                            <label className="text-sm font-semibold text-center text-gray-700">
                                Link-1
                            </label>
                            <input
                                {...register("link1", { required: "Link is Required !!" })}
                                type='url'
                                className="h-8 border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
                                // placeholder={`https://www.${modalName && modalName.toLowerCase()}.com`}
                            />
                            {
                                (errors && errors.link1) && 
                                <p className='text-[#FF3333] text-sm text-center'>{errors.link1.message}</p>
                            }
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-semibold text-center text-gray-700">
                                Link-2
                            </label>
                            <input
                                {...register("link2", { required: "Link is Required !!" })}
                                type='url'
                                className="h-8 border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
                                // placeholder={`https://www.${modalName && modalName.toLowerCase()}.com`}
                            />
                            {
                                (errors && errors.link2) && 
                                <p className='text-[#FF3333] text-sm text-center'>{errors.link2.message}</p>
                            }
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-semibold text-center text-gray-700">
                                Link-3
                            </label>
                            <input
                                {...register("link3", { required: "Link is Required !!" })}
                                type='url'
                                className="h-8 border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
                                // placeholder={`https://www.${modalName && modalName.toLowerCase()}.com`}
                            />
                            {
                                (errors && errors.link3) && 
                                <p className='text-[#FF3333] text-sm text-center'>{errors.link3.message}</p>
                            }
                        </div>
                        
                        <div>
                            <input
                                type="submit"
                                value={"Add"}
                                className='mt-6 bg-orange-500 w-full text-white font-semibold h-10 rounded-[7px]'
                            />
                        </div>
                    </form>
                </div>
            </dialog>
        )
};


export default OwnLinkModal;