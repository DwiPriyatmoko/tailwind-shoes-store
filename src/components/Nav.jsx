import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState, useEffect } from 'react';

const Nav = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className={`padding-x py-8 fixed w-full bg-white/80 backdrop-blur-sm transition-all duration-300 z-20 ${
				visible ? 'top-0' : '-top-[100%]'
			}`}
		>
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className="hidden max-lg:block cursor-pointer"
					onClick={toggleMenu}
				>
					<img src={hamburger} alt="hamburger" width={24} height={24} />
				</div>
			</nav>

			{/* Mobile Menu */}
			<nav
				className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform ${
					isMenuOpen
						? 'opacity-100 translate-y-0'
						: 'opacity-0 -translate-y-10 pointer-events-none'
				}`}
			>
				<ul className="flex flex-col items-center gap-6 py-6 bg-white/95 backdrop-blur-md">
					{navLinks.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
