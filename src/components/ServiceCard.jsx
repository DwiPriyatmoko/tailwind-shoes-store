const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className="flex-1 sm:w-[360px] sm:min-w-[350px] w-full shadow-3xl px-10 py-16 rounded-[20px]">
			<div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
				<img src={imgURL} alt={label} className="w-[28px] h-[28px]" />
			</div>
			<h3 className="mt-6 font-palanquin leading-normal font-bold text-3xl">
				{label}
			</h3>
			<p className="mt-4 font-montserrat break-words leading-normal text-slate-gray">
				{subtext}
			</p>
		</div>
	);
};

export default ServiceCard;
