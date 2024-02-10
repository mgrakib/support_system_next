import style from './CheckBox.module.css';

const CheckBox = ({ name, register, isRequired, disable, isChecked }) => {
	return (
		// <input
		// 	type='checkbox'
		// 	name={na}
		// 	id=''
		// />

		<input
			{...register(name, { required: isRequired })}
			disabled={disable}
			type='checkbox'
			checked={isChecked}
			className={`${style.CheckBox}`}
		/>
	);
};

export default CheckBox;