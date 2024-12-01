const Button = ({
	label,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}) => {
	return (
		<button
			className={`group relative flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none 
      rounded-full overflow-hidden
      ${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: 'bg-coral-red border-2 border-coral-red'
			} 
      ${fullWidth && 'w-full'}
      transition-all duration-300 ease-in-out
      hover:bg-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
      active:scale-[0.98]`}
		>
			<div className="relative inline-flex items-center">
				<span className="block transition-transform duration-300 text-white group-hover:-translate-y-full">
					{label}
				</span>
				<span className="absolute top-0 left-0 block transition-transform duration-300 text-coral-red translate-y-full group-hover:translate-y-0">
					{label}
				</span>
			</div>
		</button>
	);
};

export default Button;
