import React from "react";
import { useForm } from "react-hook-form";

const SocialModal = ({ setOpen, modalName, modalIcon, handleLinkSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const socialLinkData = {
      user: "your_user_id", // Replace this with actual user ID if applicable
      name: modalName,
      url: data?.socialURL,
    };
    console.log(socialLinkData);
    try {
      const response = await fetch("http://localhost:5000/api/links/add-social", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(socialLinkData),
      });

      const result = await response.json();

      if (response.ok) {
        handleLinkSubmit(modalName, data?.socialURL);
        setOpen(false);
      } else {
        console.error("Failed to add link:", result.error);
      }
    } catch (error) {
      console.error("Error submitting link:", error);
    }
  };

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
          <div className="pb-2 flex justify-center text-orange-500">{modalIcon}</div>
          <div className="w-full">
            <label className="flex justify-center font-semibold text-center text-gray-700">
              Add Your {modalName} Link
            </label>
            <input
              {...register("socialURL", { required: "Link is Required !!" })}
              type="url"
              className="h-10 border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
              placeholder={`https://www.${modalName?.toLowerCase()}.com`}
            />
            {errors.socialURL && (
              <p className="text-[#FF3333] text-sm text-center">{errors.socialURL.message}</p>
            )}
          </div>
          <div>
            <input
              type="submit"
              value={"Add"}
              className="mt-6 bg-orange-500 w-full text-white font-semibold h-10 rounded-[7px]"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default SocialModal;
