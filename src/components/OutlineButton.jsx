const OutlineButton = ({
	label,
	fullWidth,
}) => {
	return (
		<button
			className={`group relative flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none 
      rounded-full overflow-hidden
      ${fullWidth && 'w-full'}
      border-[1.5px] border-slate-gray
      before:absolute before:inset-0 before:bg-slate-900
      before:translate-x-[-100%] before:transition-transform before:duration-300
      hover:before:translate-x-0 before:rounded-full
      hover:border-slate-900 hover:shadow-[0_0_25px_rgba(15,23,42,0.15)]
      active:scale-[0.98] transition-all duration-300`}
		>
			<div className="relative inline-flex items-center">
				<span className="block transition-transform duration-300 text-slate-800 font-medium tracking-wide group-hover:-translate-y-full group-hover:opacity-0">
					{label}
				</span>
				<span className="absolute top-0 left-0 block transition-transform duration-300 text-white translate-y-full group-hover:translate-y-0 font-medium tracking-wide">
					{label}
				</span>
			</div>
		</button>
	);
};

export default OutlineButton;
