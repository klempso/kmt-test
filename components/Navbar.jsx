import React from 'react';
import { Facebook } from 'lucide-react';
import { InstagramIcon } from 'lucide-react';
const Navbar = () => {
	return (
		<nav>
			<div className='nav__left'>
				<img src='../src/assets/images/logo_666.png' alt='' />
			</div>
			<div className='nav__center'>
				<ul>
					<a href=''>Podjetje</a>
					<a href=''>Storitve</a>
					<a href=''>Projekti</a>
					<a href=''>Galerija</a>
					<a href=''>Zaposlitev</a>
				</ul>
			</div>
			<div className='nav__right'>
				<ul>
					<li>
						<Facebook strokeWidth={1.5} size={24} color='#27272a' />
					</li>
					<li>
						<InstagramIcon strokeWidth={1.5} size={24} color='#27272a' />
					</li>
				</ul>
				<button className='nav__button'>Kontakt</button>
			</div>
		</nav>
	);
};

export default Navbar;
