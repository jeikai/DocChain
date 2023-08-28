import React, { Fragment, useContext, useEffect, useState } from "react";
import { bg, logo } from "../assets/index";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { useContract, useContractRead } from "@thirdweb-dev/react-core";
import { PublicKeyContext } from "./PublicKeyContext";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({
	visible,
	onClose,
	image,
	input,
	setInput,
	flag,
	setFlag,
	transaction,
}) => {
	if (!visible) {
		return false;
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(input);
		//viết api ở đây xong trả về true/ false
		console.log(transaction);
		const doc = {
			data: transaction.hash,
			publicKey: input ?? " ",
			signature: transaction.Signature,
		};
		const res = await axios.post(
			"http://localhost:5000/esign/view",
			JSON.stringify(doc),
			{
				headers: { "Content-Type": "application/json" },
			}
		);
		// gắn vào flag
		if (res.data) {
			setFlag(true);
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Invaid public key!",
				timer: 1500,
			});
		}
	};
	const handleOnClose = () => {
		setInput("");
		setFlag(false);
		onClose();
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
			<div className="p-[2px] rounded w-1/2 bg-gradient-to-tr from-[#2BFF88] via-[#15BFFD] to-[#9C37FD]">
				<div className="w-full bg-black rounded p-4">
					<div className="flex items-center justify-between pb-2 border-b-2 mb-4 ">
						<span className="text-lg font-medium">Preview Documentations</span>
						<div className="cursor-pointer" onClick={handleOnClose}>
							<CloseRoundedIcon />
						</div>
					</div>
					{flag ? (
						<div className="overflow-y-auto h-[650px]">
							<div className="mr-2">
								<img className="w-full" src={image} alt="" />
							</div>
						</div>
					) : (
						<form action="" onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Input your public key to view"
								className="z-50 w-full outline-none p-2 my-4 text-white rounded-lg"
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<button className="ml-auto flex w-fit bg-gradient-to-tr from-[#2BFF88] via-[#15BFFD] to-[#9C37FD] px-4 py-2 rounded-lg text-xl">
								Sumbit
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

const Guest = () => {
	const [showModal, setShowModal] = useState(false);
	const { contract } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT);
	const { data, isLoading } = useContractRead(contract, "getAllSigned");
	const [error, setError] = useState(false);
	const [transaction, setTransaction] = useState();
	const [transaction2, setTransaction2] = useState([]);

	const { publicKey } = useContext(PublicKeyContext);
	const [input, setInput] = useState("");
	const [flag, setFlag] = useState(false);
	const [address, setAddress] = useState("");
	console.log(isLoading);
	useEffect(() => {
		setTransaction2(data);
	}, [data]);

	useEffect(() => {
		const doc = data?.filter((item) => item.sender.includes(address));
		if (doc) {
			console.log(doc);
			setTransaction2(doc);
		} else {
			setError(true);
			console.log("Not Found");
		}
	}, [address]);

	//   const [transaction, setTransaction] = useState({})
	const handleOnClose = () => setShowModal(false);
	const shortenAddress = (address) =>
		`${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
	return (
		<Fragment>
			<div className="flex flex-col gap-8 items-center">
				<div className=" border-[1.5px] w-[30%] bg-gray-900 border-slate-600 rounded-3xl m-10 flex gap-2 items-center">
					<input
						className="bg-gray-900  w-full h-full p-5 rounded-3xl"
						placeholder="Enter address wallet..."
						value={address}
						onChange={(event) => {
							setAddress(event.target.value);
						}}
					/>
				</div>
				<img
					className="w-screen h-screen object-cover absolute"
					src={bg}
					alt=""
				/>
				{isLoading ? (
					<div>
						<div className="w-16 h-16 border-l-2 border-t-2 border-l-[#15BFFD] border-t-[#15BFFD] rounded-full p-1 animate-spin delay-75">
							<div className="w-full h-full border-l-2 border-t-2 border-l-[#9C37FD] border-t-[#9C37FD] rounded-full p-1 animate-spin delay-150">
								<div className="w-full h-full border-l-2 border-t-2 border-l-[#FF2525] border-t-[#FF2525] rounded-full animate-spin delay-200"></div>
							</div>
						</div>
					</div>
				) : (
					<div className="w-full bg-gradient-to-r relative grid grid-cols-3 gap-4 p-4">
						{transaction2?.map((item) => {
							return (
								<div className="py-6 border-[1px] border-[rgba(255, 255, 255, .2)] backdrop-blur-xl rounded-xl">
									<div className="w-full h-full flex items-center justify-center gap-4 px-8">
										<div
											className="p-4 w-24 h-36 border-[1px] relative group flex items-center"
											onClick={() => {
												setTransaction(item);
												setShowModal(true);
											}}>
											<img src={logo} alt="" className="w-full " />
											<div className="hidden items-center justify-center absolute w-full h-full top-0 left-0 backdrop-brightness-[0.25] cursor-pointer z-10 group-hover:flex">
												<RemoveRedEyeRoundedIcon />
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-center  mb-1">
												<span className="font-bold flex-1">
													Document name:{" "}
												</span>
												<span>{item.imageName}</span>
											</div>
											<div className="flex items-center  mb-1">
												<span className="font-bold flex-1">Status: </span>
												<span>Verified </span>
											</div>
											<div className="flex items-center  mb-1">
												<span className="font-bold flex-1">Upload on: </span>
												<span>
													{new Date(
														item.timestamp.toNumber() * 1000
													).toLocaleString()}{" "}
												</span>
											</div>
											<div className="flex items-center  mb-1">
												<span className="font-bold flex-1">Type: </span>
												<span>Certification </span>
											</div>
											<div className="flex items-center  mb-1">
												<span className="font-bold flex-1">Address: </span>
												<span>{shortenAddress(item?.sender)} </span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
			<Modal
				onClose={handleOnClose}
				visible={showModal}
				image={transaction?.hash}
				input={input}
				setInput={setInput}
				flag={flag}
				setFlag={setFlag}
				transaction={transaction}
			/>
		</Fragment>
	);
};

export default Guest;
