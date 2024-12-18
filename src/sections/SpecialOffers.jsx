import { offer } from '../assets/images';
import Button from '../components/Button';
import OutlineButton from '../components/OutlineButton';

const SpecialOffers = () => {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img
					src={offer}
					alt="offer"
					width={773}
					height={687}
					className="object-contain"
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					<span className="text-coral-red">Special</span> Offer
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Embark on a journey of exceptional comfort and style with our special
					offer. We have a wide range of shoes for you to choose from.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Experience top-notch quality and style with our selection. Discover a
					great quality and comfort for your feet.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="View Details" />
					<OutlineButton label="Learn More" />
				</div>
			</div>
		</section>
	);
};

export default SpecialOffers;
