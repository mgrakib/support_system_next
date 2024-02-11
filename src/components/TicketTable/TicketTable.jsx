/** @format */
"use client";
import style from "./TicketTable.module.css";
import TicketBtn from "../Buttons/TicketBtn/TicketBtn";
import { MdRemoveRedEye } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import ReactPaginate from "react-paginate";
const TicketTable = () => {
	let value = [
		{
			id: 1,
			ticket: "tick1",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "high",
			ticketDate: "02-11-2024",
			status: "open",
		},
		{
			id: 2,
			ticket: "tick2",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "medium",
			ticketDate: "02-11-2024",
			status: "in progress",
		},
		{
			id: 3,
			ticket: "tick3",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "low",
			ticketDate: "02-11-2024",
			status: "close",
		},
		{
			id: 4,
			ticket: "tick4",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "low",
			ticketDate: "02-11-2024",
			status: "answered",
		},
		{
			id: 1,
			ticket: "tick1",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "high",
			ticketDate: "02-11-2024",
			status: "open",
		},
		{
			id: 2,
			ticket: "tick2",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "medium",
			ticketDate: "02-11-2024",
			status: "in progress",
		},
		{
			id: 3,
			ticket: "tick3",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "low",
			ticketDate: "02-11-2024",
			status: "close",
		},
		{
			id: 4,
			ticket: "tick4",
			issuedBy: "mgr@gmail.com",
			userName: "MG Rakib",
			organization: "NTMC",
			project: "PIDS",
			priority: "low",
			ticketDate: "02-11-2024",
			status: "answered",
		},
	];
	
	const [itemOffset, setItemOffset] = useState(0);

	return (
		<div className='bg-dark-4 p-4'>
			<div className='w-full overflow-x-auto'>
				<div className='bg-primary-color min-w-[1200px] md:min-w-100%'>
					<div className='flex items-center text-title-color font-semibold px-2 py-4 border-b border-secondary-text-color'>
						<div className='w-[5%]'>S/N</div>
						<div className='w-[15%]'>TICKET</div>
						<div className='w-[15%]'>ISSUED BY</div>
						<div className='w-[10%]'>USER NAME</div>
						<div className='w-[12%]'>ORGANIZATION</div>
						<div className='w-[8%]'>PROJECT</div>
						<div className='w-[8%]'>PRIORITY</div>
						<div className='w-[15%]'>TICKET DATE</div>
						<div className='w-[6%]'>STATUS</div>
						<div className='w-[6%]'>ACTION</div>
					</div>
					{value?.map(item => {
						const {
							id,
							ticket,
							issuedBy,
							userName,
							organization,
							project,
							priority,
							ticketDate,
							status,
						} = item || {};

						let ticketBtn;
						if (status.toLowerCase() === "open") {
							ticketBtn = (
								<TicketBtn
									title={"open"}
									color={"text-action-color"}
									borderColor={"border-action-color"}
									hoverBg={"hover:bg-action-color"}
									hoverColor={"hover:text-text-primary-color"}
								/>
							);
						}
						if (status.toLowerCase() === "close") {
							ticketBtn = (
								<TicketBtn
									title={"close"}
									color={"text-close-color"}
									borderColor={"border-close-color"}
									hoverBg={"hover:bg-close-color"}
									hoverColor={"hover:text-text-primary-color"}
								/>
							);
						}
						if (status.toLowerCase() === "answered") {
							ticketBtn = (
								<TicketBtn
									title={"answered"}
									color={"text-title-color"}
									borderColor={"border-title-color"}
									hoverBg={"hover:bg-title-color"}
									hoverColor={"hover:text-text-primary-color"}
								/>
							);
						}
						if (status.toLowerCase() === "in progress") {
							ticketBtn = (
								<TicketBtn
									title={"in progress"}
									color={"text-high-color"}
									borderColor={"border-high-color"}
									hoverBg={"hover:bg-high-color"}
									hoverColor={"hover:text-text-primary-color"}
								/>
							);
						}
						return (
							<div
								key={id}
								className='flex items-center text-text-primary-color font-semibold px-2 py-4 border-b border-secondary-text-color gap-1'
							>
								<div className='w-[5%]'>1</div>
								<div className='w-[15%]'>{ticket}</div>
								<div className='w-[15%]'>{issuedBy}</div>
								<div className='w-[10%]'>{userName}</div>
								<div className='w-[12%]'>{organization}</div>
								<div className='w-[8%]'>{project}</div>
								<div className='w-[8%]'>
									<div
										className={`w-[8px] h-[8px] rounded-full  relative group ${
											priority.toLowerCase() === "high"
												? "bg-high-color"
												: priority.toLowerCase() ===
												  "medium"
												? "bg-title-color"
												: "bg-action-color"
										}`}
									>
										<div
											className={`${style.tooltip} opacity-0 duration-300 group-hover:opacity-100 capitalize`}
										>
											{priority}
										</div>
									</div>
								</div>
								<div className='w-[15%]'>
									2023-10-04 10:05:33
								</div>
								<div className='w-[6%] flex items-center'>
									<div className='translate-y-1 hover:translate-y-0 duration-200 flex'>
										{ticketBtn}
									</div>
								</div>
								<div className='w-[6%] flex items-center'>
									<div className='translate-y-1 hover:translate-y-0 duration-200'>
										<TicketBtn
											icon={MdRemoveRedEye}
											bgColor={"bg-action-color"}
											color={"text-text-primary-color"}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='pt-4 flex items-center justify-center gap-2'>
				<button
					onClick={() =>
						setPagination(pre => ({ ...pre, page: pre?.page - 1 }))
					}
					className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-title-color font-bold text-text-primary-color cursor-pointer'
				>
					<FaChevronLeft />{" "}
				</button>
				<div className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-title-color font-bold text-text-primary-color'></div>

				<button className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-title-color font-bold text-text-primary-color cursor-pointer'>
					<FaChevronRight />{" "}
				</button>
			</div>
		</div>
	);
};

export default TicketTable;
