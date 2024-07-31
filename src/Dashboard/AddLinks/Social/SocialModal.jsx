import React from 'react';

const SocialModal = ({modalName, modalIcon}) => {
    return (<dialog id="social_modal" className="modal">
                <div className="modal-box w-96 bg-white rounded-md border border-orange-200">
                    <form method="dialog" className=''>
                    <button className="btn btn-sm btn-ghost absolute right-2 top-2">✕</button>
                        <div className='pb-2 flex justify-center text-orange-500'>{modalIcon}</div>
                        <div class="w-full h-10">
                            <label class="flex justify-center font-semibold text-center text-gray-700">Add Your {modalName} Link</label>
                            <input type='url'
                            class="h-[36px] border border-orange-500 rounded-[7px] bg-slate-100 w-full pl-2 text-blue-400"
                            placeholder={`https://www.${modalName.toLowerCase()}.com`}/>
                        </div>
                        <div>
                            <input type="submit" value={"Add"} className='mt-10 bg-orange-500 w-full text-white font-semibold h-10 rounded-[7px]' />
                        </div>
                    </form>
                </div>
            </dialog>
    );
};

export default SocialModal;