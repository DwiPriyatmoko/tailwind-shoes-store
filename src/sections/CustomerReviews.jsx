import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h3 className="font-palanquin font-bold text-4xl text-center">
				What our
				<span className="text-coral-red"> customers </span>
				say?
			</h3>
			<p className="info-text m-auto mt-4 font-montserrat text-center max-w-lg">
				{' '}
				See what they have to say about us and our products.
			</p>

			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
				{reviews.map((review) => (
					<ReviewCard
						key={review.customerName}
						imgURL={review.imgURL}
						customerName={review.customerName}
						customerReview={review.customerReview}
						rating={review.rating}
						feedback={review.feedback}
					/>
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
