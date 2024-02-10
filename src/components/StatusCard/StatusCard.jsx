import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

const StatusCard = ({title, number, newTicket, highPriority}) => {
    return (
		<div className='bg-dark-4 px-3 py-4 rounded'>
			{/* title  */}
			<div className='flex items-center justify-between pb-5 border-b border-dashed border-gray-color'>
				<p className='capitalize text-text-primary-color font-bold'>
					{title}
				</p>

				{title.toLowerCase() === "open" && (
					<div className='w-[40%] max-w-[120px] relative top-1 hover:top-0 duration-300 '>
						<PrimaryBtn
							text={"New Text"}
							color={"text-primary-color"}
						/>
					</div>
				)}
			</div>

			{/* numbers  */}
			<div className='w-full mt-6 px-5'>
				<div className='cursor-pointer'>
					<div className=' w-full flex items-center justify-center '>
						<div className='w-[100px] h-[100px] bg-dark-3 rounded-full flex items-center justify-center shadow-[0px_0px_10px_rgba(255,255,255,.3)]'>
							<div className='w-[88%] h-[88%] bg-primary-color rounded-full text-ternary-color text-3xl font-bold flex items-center justify-center'>
								{number}
							</div>
						</div>
					</div>

					<div className='mt-4 text-center'>
						<p className='text-title-color'>{newTicket} New</p>
						<p className='text-secondary-text-color mt-2'>
							<span className='text-action-color'>
								{newTicket} Ticket(s)
							</span>{" "}
							with High Priority
						</p>
					</div>
				</div>
            </div>
        
		</div>
	);
};

export default StatusCard;