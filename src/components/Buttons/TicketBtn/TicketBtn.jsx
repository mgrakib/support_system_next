import React from 'react';

const TicketBtn = ({icon:IconText, title, bgColor, color, hoverBg, hoverColor, borderColor, hoverBorderColor}) => {
    // what to render 

	return (
		<button
			className={`bg-${bgColor} text-${color} hover:bg-${hoverBg} hover:text-${hoverColor} flex items-center justify-center gap-2 ${
				borderColor && "border"
			} border-close-color py-1 px-3 rounded`}
		>
			{IconText && <IconText />}
			{title && title}
		</button>
	);
};

export default TicketBtn;