/** @format */

"use client";

import { useForm } from "react-hook-form";
import InputWithIcon from "../inputs/inputWithIcon/InputWithIcon";
import { FaUser, FaKey } from "react-icons/fa";
import PrimaryBtn from "../Buttons/PrimaryBtn/PrimaryBtn";
import CheckBox from "../CheckBox/CheckBox";
import { useState } from "react";
const LoginSection = () => {
	const [isChecked, setIsChecked] = useState(false);

	
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = data => console.log(data);
	return (
		<div>
			{/* input  */}
			<div className='flex flex-col gap-4'>
				<InputWithIcon
					register={register}
					name={"userName"}
					isRequired={true}
					icon={FaUser}
					placeholder={"Username"}
				/>
				<InputWithIcon
					register={register}
					name={"password"}
					isRequired={true}
					icon={FaKey}
					placeholder={"Password"}
				/>
			</div>

			<div className='p-4 border border-gray-color mt-10'>
				<div className='h-[300px] overflow-y-auto text-text-primary-color text-[14px] text-justify custom-scroll'>
					<p>
						<span className='text-red-500 font-bold'>WARNING!</span>{" "}
						You are accessing a Bangladesh Government secured
						information system, which includes this computer, this
						computer network, all computers connected to this
						network, and all devices and/or storage media attached
						to this network or to a computer on this network. This
						information system is provided for BANGLADESH
						Government-authorized use only. Unauthorized or improper
						use of this system may result in disciplinary action and
						civil and criminal penalties. By using this information
						system, you understand and consent to the following: You
						have no reasonable expectation of privacy regarding any
						communications transmitted through or data stored on
						this information system. At any time, the government may
						monitor, intercept, search and/or seize data transiting
						or stored on this information system. Any communications
						transmitted through or data stored on this information
						system may be disclosed or used for any BANGLADESH
						Government-authorized purpose.
					</p>
					<p className='mt-10'>
						<span className='text-red-500 font-bold'>WARNING!</span>{" "}
						The use of publicly accessible computers (e.g.
						libraries, airports, cafes, hotels, Public Wi-Fi etc.)
						to access the System is unauthorized. This type of usage
						may result in the involuntary dissemination of
						information to unauthorized entities. Data may be left
						on this computer resulting in the next person using this
						computer the ability to view your data.
					</p>

					<div
						onClick={() => setIsChecked(!isChecked)}
						className='mt-2 flex items-center gap-4 cursor-pointer '
					>
						<div>
							<CheckBox
								register={register}
								name={"isOkay"}
								isRequired={true}
								isChecked={isChecked}
							/>
						</div>
						<div htmlFor='checkbox'>
							I agree to the{" "}
							<span className='text-[#E16123]'>
								terms and conditions
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-5'>
				{isChecked && (
					<div>
						<PrimaryBtn
							text={"Login"}
							bgColor={"ternary-color"}
							color={"text-primary-color"}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoginSection;
