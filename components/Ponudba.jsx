'use client';

import { Warehouse, House, Tent, Zap, CirclePile } from 'lucide-react';
import AccordionComponent from './Accordion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { useRef, useState } from 'react';
const items = [
	{
		title: 'Skladiščne hale',
		content:
			'Skladiščne hale so optimalna rešitev za dodaten skladiščni prostor, ki se lahko uporablja kot začasen ali stalen objekt. Njihova zasnovanost omogoča hitro in enostavno prilagajanje objekta vaši lokaciji ter željam. Zaradi raznovrstnih tipov hal se le te lahko uporabljajo na številne načine.',
		icon: Warehouse,
		src: '../src/assets/avstrija-1-mod.jpg',
	},
	{
		title: 'Večnamenski šotori',
		content:
			'Skladiščne hale so optimalna rešitev za dodaten skladiščni prostor, ki se lahko uporablja kot začasen ali stalen objekt. Njihova zasnovanost omogoča hitro in enostavno prilagajanje objekta vaši lokaciji ter željam. Zaradi raznovrstnih tipov hal se le te lahko uporabljajo na številne načine.',
		icon: House,
		src: '../src/assets/avstrija-1-mod.jpg',
	},
	{
		title: 'Prireditveni pagode',
		content:
			"Yes. It's animated by default, but you can disable it if you prefer.",
		icon: Tent,
		src: '../src/assets/avstrija-1-mod.jpg',
	},
	{
		title: 'Večnamenska oprema',
		content:
			"Yes. It's animated by default, but you can disable it if you prefer.",
		icon: CirclePile,
		src: '../src/assets/avstrija-1-mod.jpg',
	},
];
const Ponudba = () => {
	const contentRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	useGSAP(() => {
		gsap.fromTo(
			'#title',
			{
				opacity: 0,
			},
			{ opacity: 1, duration: 1 }
		);
		gsap.fromTo(
			'.ponudba__item-right img',
			{ opacity: 0, xPercent: 120 },
			{ xPercent: 0, opacity: 1, duration: 0.8, ease: 'power1.inOut' }
		);
	}, [currentIndex]);

	useGSAP(() => {
		gsap.from('.ponudba__item-left', {
			scrollTrigger: {
				trigger: '.storitve__item-left',
				start: 'bottom 60%',
			},
			xPercent: -100,
			duration: 2,
		});
		gsap.from('.ponudba__item-right', {
			scrollTrigger: {
				trigger: '.storitve__item-left',
				start: 'bottom 60%',
			},
			xPercent: 100,
			duration: 2,
		});
		gsap.from('.ponudba__title', {
			scrollTrigger: {
				trigger: '.ponudba__title',
				start: 'top 80%', // when top of element hits 80% of viewport
			},
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
		});
	});

	const totalNumberOfCocktails = items.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalNumberOfCocktails) % totalNumberOfCocktails;

		setCurrentIndex(newIndex);
	};

	const getCocktail = (indexOfset) => {
		return sliderLists[
			(currentIndex + indexOfset + totalNumberOfCocktails) %
				totalNumberOfCocktails
		];
	};
	return (
		<section className='ponudba'>
			<div className='ponudba__title'>
				<h1>Ponudba našega podjetja </h1>
				<h2>po evropskih standardih</h2>
			</div>

			<div className='ponudba__item-left'>
				<AccordionComponent items={items} goToSlide={goToSlide} />
			</div>
			<div className='ponudba__item-right'>{<img src={items[1].src} />}</div>
		</section>
	);
};

export default Ponudba;
