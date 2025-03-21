import React from "react";
import { useForm } from "react-hook-form";

const SocialModal = ({ setOpen, modalName, modalIcon, handleLinkSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleLinkSubmit(modalName, data.socialURL); // ✅ Store link in state
    setOpen(false);
  };

  React.useEffect(() => {
    setError("socialURL", {
      type: "manual",
      message: "",
    });
  }, [setError]);

  return (
    <dialog id="social_modal" className="modal" open>
      <div className="modal-box w-96 bg-white rounded-md border border-orange-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className="btn btn-sm btn-ghost absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <div className="pb-2 flex justify-center text-orange-500">
            {modalIcon}
          </div>
          <div className="w-full">
            <label className="flex justify-center font-semibold text-center text-gray-700">
              Add Your {modalName} Link
            </label>
            <input
              {...register("socialURL", { required: "Link is Required !!" })}
              type="url"
              className="h-10 border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
              placeholder={`https://www.${modalName.toLowerCase()}.com`}
            />
            {errors.socialURL && (
              <p className="text-[#FF3333] text-sm text-center">
                {errors.socialURL.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Add"
              className="mt-6 bg-orange-500 w-full text-white font-semibold h-10 rounded-[7px]"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default SocialModal;
