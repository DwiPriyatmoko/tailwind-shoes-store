import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex flex-col justify-center items-center ">
			<img
				src={imgURL}
				alt="customer"
				className="rounded-full object-cover w-[120px] h-[120px]"
			/>
			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
			<div className="flex justify-center items-center mt-6 gap-2">
				<img
					src={star}
					alt="icon star"
					width={20}
					height={20}
					className="object-contain m-0"
				/>
				<p className="font-montserrat text-xl text-slate-gray">({rating})</p>
			</div>
			<h3 className="font-palanquin mt-2 text-center font-bold text-2xl">
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
