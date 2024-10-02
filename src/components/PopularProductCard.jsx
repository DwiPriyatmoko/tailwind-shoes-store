import { star } from '../assets/icons';

// eslint-disable-next-line react/prop-types
const PopularProductCard = ({ imgURL, name, price, rating }) => {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full">
			<img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
			<div className="mt-8 flex flex-justify-start gap-2.5 mb-2">
				<img src={star} alt="rating" width={20} height={20} />
				<p className="font-montserrat text-l leading-normal text-slate-gray">
					({rating})
				</p>
			</div>
			<h3 className="font-palanquin font-bold text-xl">{name}</h3>
			<p className="font-montserrat mt-2 text-sm font-semi-bold text-coral-red leading-normal">
				{price}
			</p>
		</div>
	);
};

export default PopularProductCard;
