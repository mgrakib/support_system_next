import Image from 'next/image';
import React from 'react';
import { FaAngleDown, FaRegBell } from "react-icons/fa";
import ProfileSection from './ProfileSection';

const NavBar = () => {
    return (
		<div className='flex items-center justify-between'>
			{/* logo and title  */}
			<div className='flex items-center gap-2 md:gap-3'>
				<div className=' w-[40px] h-[40px] md:w-[50px] md:h-[50px] relative'>
					<div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]'>
						<Image
							src={"https://i.ibb.co/X8mGwVK/logo.png"}
							alt='ntmc logo'
							layout='fill' // Fill parent container
							objectFit='contain' // Cover parent container
						/>
					</div>
				</div>
				<h2 className='text-[14px] md:text-[20px] text-text-primary-color font-bold'>
					NTMC Support System
				</h2>
			</div>

			<ProfileSection />
		</div>
	);
};

export default NavBar;