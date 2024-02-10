import React from 'react';

const PrimaryBtn = ({ text, icon: IconValue, bgColor, color }) => {
	return (
		<div
			className={`flex justify-center items-center rounded-sm gap-2 py-2 w-full bg-ternary-color text-${color} font-bold cursor-pointer`}
		>
			{IconValue && <div>{<IconValue />}</div>}
			<button className=''>{text}</button>
		</div>
	);
};

export default PrimaryBtn;