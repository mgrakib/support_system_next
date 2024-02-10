/** @format */

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
const ProfileSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const profileItem = (
		<ul className='px-[10px] py-[12px]'>
			<li className='md:hidden flex items-center gap-2 px-2 py-2 '>
				<div className=' w-[40px] h-[40px]  relative'>
					<div className=' absolute top-1/2 -translate-y-1/2 w-[85%] h-[85%]'>
						<Image
							src={"https://i.ibb.co/X8mGwVK/logo.png"}
							alt='ntmc logo'
							layout='fill' // Fill parent container
							objectFit='contain' // Cover parent container
						/>
					</div>
				</div>
				<p className='text-gray-color text-[13px]'>
					Welcome,{" "}
					<span className='text-ternary-color'>Md. Golam Rakib</span>
				</p>
			</li>

			<li className='flex items-center gap-2 px-2 py-2 hover:rounded hover:bg-dark-3'>
				<FiUser />
				<p>My Profile</p>
			</li>
			<li className='flex items-center gap-2 px-2 py-2 hover:rounded hover:bg-dark-3'>
				<FiUser />
				<p>Change Password</p>
			</li>
			<li className='flex items-center gap-2 px-2 py-2 hover:rounded hover:bg-dark-3'>
				<FiUser />
				<p>Sing Out</p>
			</li>
			<li className='md:hidden flex items-center gap-2 px-2 py-2 hover:rounded hover:bg-dark-3'>
				<div className='relative'>
					<FaRegBell className='text-[18px] text-gray-color ' />
					<div className='w-[5px] h-[5px] bg-ternary-color rounded-full absolute top-1 right-0'></div>
				</div>

				<p>Notification</p>
			</li>
		</ul>
	);

    
	return (
		<div className='relative'>
			{/* profile  */}

			<div className='hidden md:flex items-center gap-5 '>
				<div className='relative'>
					<FaRegBell className='text-[18px] text-gray-color ' />
					<div className='w-[5px] h-[5px] bg-ternary-color rounded-full absolute top-1 right-0'></div>
				</div>

				{/* profile for pc  */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='flex relative items-center gap-2 md:gap-3 cursor-pointer'
				>
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
					<p className='text-gray-color'>
						Welcome,{" "}
						<span className='text-ternary-color'>
							Md. Golam Rakib
						</span>
					</p>
					<div>
						<FaAngleDown className='text-gray-color' />
					</div>

					<div
						className={`text-text-primary-color  bg-dark-2  absolute  w-full shadow-[0px_0px_10px_rgba(0,0,0,.5)] rounded max-h-${
							isOpen ? "auto" : "0"
						} overflow-hidden top-[${
							isOpen ? "120%" : "140%"
						}] duration-300`}
					>
						{profileItem}
					</div>
				</div>
			</div>

			{/* for mobile menu */}
			<div
				onClick={() => setIsOpen(!isOpen)}
				className='md:hidden flex flex-col gap-1 relative '
			>
				<div
					className={`w-[20px] h-[2px] bg-text-primary-color relative duration-300 ${
						isOpen && "rotate-45 "
					}`}
				></div>
				<div
					className={`w-[20px] h-[2px] bg-text-primary-color duration-200 ${
						isOpen ? "opacity-0" : "opacity-100"
					}`}
				></div>
				<div
					className={`w-[20px] h-[2px] bg-text-primary-color duration-300 ${
						isOpen && "-rotate-45 absolute"
					}`}
				></div>
			</div>

			{/* for mobile section */}

			<div
				className={`md:hidden text-text-primary-color  bg-dark-2  absolute  w-[60vw] shadow-[0px_0px_10px_rgba(0,0,0,.5)]  rounded right-1 opacity-0 ${
					isOpen ? "max-h-auto top-10 opacity-100" : "max-h-0 top-12 "
				}  duration-300`}
			>
				{profileItem}
			</div>
		</div>
	);
};

export default ProfileSection;
