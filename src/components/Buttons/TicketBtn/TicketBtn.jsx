/** @format */

import React from "react";

const TicketBtn = ({
	icon: IconText,
	title,
	bgColor,
	color,
	hoverBg,
	hoverColor,
	borderColor,
}) => {
	return (
		<button
			className={`${bgColor} ${color} ${hoverBg && hoverBg} ${
				hoverColor && hoverColor
			} flex items-center justify-center gap-2 ${
				borderColor && "border"
			} ${borderColor} py-[3px] px-2 rounded h min-w-[50px] min-h-[25px] capitalize text-[9px]`}
		>
			{IconText && <IconText />}
			{title && title}
		</button>
	);
};

export default TicketBtn;
