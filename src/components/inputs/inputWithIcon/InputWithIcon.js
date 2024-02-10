import React from 'react';

const InputWithIcon = ({ icon: IconName, name, register, isRequired, disable, placeholder }) => {
    return (
        <div className=' rounded w-full outline-none bg-gray-color text-secondary-text-color flex items-center gap-3 px-2 py-1 '>
            {IconName  && <div className='pl-2 pr-4 mr-2 border-r border-secondary-text-color'>
                <IconName />
            </div>}
            <div>
                <input
                    disabled={disable}
                    {...register(name, { required: isRequired })}
                    className='input bg-transparent w-full outline-none py-[6px] text-[14px] placeholder:text-[14px]'
                    placeholder={placeholder}


                />
            </div>
        </div>
    );
};

export default InputWithIcon;