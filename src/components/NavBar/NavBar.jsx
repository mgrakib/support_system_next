/** @format */

import Image from "next/image";
import React from "react";

import ProfileSection from "./ProfileSection";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineQuestionMark } from "react-icons/md";
const NavBar = () => {
	return (
		<div className="mb-4">
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

			<div className='mt-5'>
				<div className='p-4 bg-dark-3 rounded flex items-center '>
					<div className='flex items-center gap-2 text-text-primary-color mr-5 pr-5 border-r border-text-primary-color cursor-pointer'>
						<AiFillDashboard className='text-[16px]' />
						<p>Dashboard</p>
					</div>
					<div className='flex items-center gap-2 text-text-primary-color cursor-pointer'>
						<MdOutlineQuestionMark className='text-[16px]' />
						<p>FAQ</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
