import React from 'react';
import TicketBtn from '../Buttons/TicketBtn/TicketBtn';

const TicketTable = ({data}) => {
    return (
		<div className='bg-primary-color '>
			<div className='flex items-center text-title-color font-semibold px-2 py-4 border-b border-secondary-text-color'>
				<div className='w-[10%]'>S/N</div>
				<div className='w-[17%]'>TICKET</div>
				<div className='w-[17%]'>ORGANIZATION</div>
				<div className='w-[10%]'>PROJECT</div>
				<div className='w-[10%]'>PRIORITY</div>
				<div className='w-[16%]'>TICKET DATE</div>
				<div className='w-[10%]'>STATUS</div>
				<div className='w-[10%]'>ACTION</div>
			</div>

			<div className='flex items-center text-title-color font-semibold px-2 py-4 border-b border-secondary-text-color'>
				<div className='w-[10%]'>1</div>
				<div className='w-[17%]'>NTPIDS0410232038</div>
				<div className='w-[17%]'>NTMC</div>
				<div className='w-[10%]'>PIDS</div>
				<div className='w-[10%]'>
					<div className='w-full flex items-center justify-start'>
						<div className='w-[8px] h-[8px] rounded-full bg-red-500'></div>
					</div>
				</div>
				<div className='w-[16%]'>2023-10-04 10:05:33</div>
				<div className='w-[10%]'>
					<TicketBtn
						title={"close"}
						bgColor={"close-color"}
						color={"close-color"}
						borderColor={"close-color"}
					/>
				</div>
				<div className='w-[10%]'>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default TicketTable;