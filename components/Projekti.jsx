'use client';
import AccordionProjekti from './AccordionProjekti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import avstrija1 from '@/assets/images/avstrija-1-mod.jpg';
import avstrija2 from '@/assets/images/avstrija-2-mod.jpg';
import haleOne from '@/assets/images/hale-one.jpg';

const items = [
	{
		title: 'Nemčija',
		content: 'Yes. It adheres to the WAI-ARIA design pattern.',
		h3: 'Skladiščne hale za kmete',
		img: avstrija1,
	},
	{
		title: 'Avstrija',
		content:
			"Yes. It comes with default styles that matches the other components' aesthetic.",
		h3: 'Skladiščne hale za kmete',
		img: avstrija1,
	},
	{
		title: 'Norveška',
		content:
			"Yes. It's animated by default, but you can disable it if you prefer.",
		h3: 'Skladiščne hale za kmete',
		img: avstrija1,
	},
	{
		title: 'Hrvaška',
		content:
			"Yes. It comes with default styles that matches the other components' aesthetic.",
		h3: 'Skladiščne hale za kmete',
		img: avstrija1,
	},
];

const itemsSlo = [
	{
		title: 'asdf',
		content: 'Yes. It adheres to the WAI-ARIA design pattern.',
		h3: 'Skladiščne hale za kmete',
		img: haleOne,
	},
	{
		title: 'fsda',
		content:
			"Yes. It comes with default styles that matches the other components' aesthetic.",
		h3: 'Skladiščne hale za kmete',
		img: haleOne,
	},
	{
		title: 'Norveška',
		content:
			"Yes. It's animated by default, but you can disable it if you prefer.",
		h3: 'Skladiščne hale za kmete',
		img: haleOne,
	},
	{
		title: 'Hrvaška',
		content:
			"Yes. It comes with default styles that matches the other components' aesthetic.",
		h3: 'Skladiščne hale za kmete',
		img: haleOne,
	},
];

const dummySrc = avstrija2;
const Projekti = () => {
	const sliderTop = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [chosenProjekt, setChosenProjekt] = useState(1);

	useGSAP(() => {});

	const totalNumberOfCocktails = items.length;
	const totalNumberOfSlovenia = itemsSlo.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalNumberOfCocktails) % totalNumberOfCocktails;

		setCurrentIndex(newIndex);
	};
	const goToCategory = (index) => {
		setChosenProjekt(index);
	};
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sliderTop.current,
				start: 'bottom bottom', // when middle of viewport hits the section
				toggleActions: 'play none none none',
			},
		});

		tl.from('.projekti__title', {
			yPercent: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
		}).from(
			'.projekti__nav',
			{
				yPercent: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out',
			},
			'+=0.1', // ⬅️ 0.5s after left
		);
	});

	useGSAP(() => {
		gsap.fromTo(
			'.projekti__images',
			{ opacity: 0, xPercent: 100 },
			{ xPercent: 0, opacity: 1, duration: 0.6, ease: 'power1.inOut' },
		);
	}, [currentIndex]);
	const finalProjekt = chosenProjekt === 1 ? items : itemsSlo;
	return (
		<section className='projekti'>
			<div className='projekti__wrapper'>
				<div className='projekti__title' ref={sliderTop}>
					<h1>Projekti našega podjetja</h1>
					<div className='projekti__subtitle'>
						<h2>
							Delujemo znotraj celotne Evrope ter Slovenije v povezavi s
							slovenskimi in mednarodnimi partnerji
						</h2>
					</div>
				</div>
				<div className='projekti__nav'>
					<div
						className={
							chosenProjekt === 1
								? 'projekti__nav-item projekti__active'
								: 'projekti__nav-item'
						}
						onClick={() => goToCategory(1)}
					>
						Mednarodni
					</div>
					<div
						className={
							chosenProjekt === 0
								? 'projekti__nav-item projekti__active'
								: 'projekti__nav-item'
						}
						onClick={() => goToCategory(0)}
					>
						Slovenski
					</div>
				</div>
				<div className='projekti__box'>
					<div className='projekti__box-left'>
						<AccordionProjekti
							items={chosenProjekt === 1 ? items : itemsSlo}
							goToSlide={goToSlide}
							currentIndex={currentIndex}
							finalProjekt={finalProjekt}
							setCurrentIndex={setCurrentIndex}
						/>
						<div className='projekti__box-left-bottom'>
							<p>
								Preostale projekte našega podjetja si lahko ogledate v galeriji.
							</p>
							<a href='' className='kmt__button projekti__box-left-button'>
								Galerija
								<ArrowRight size={20} />
							</a>
						</div>
					</div>
					<div className='projekti__box-right'>
						{finalProjekt ? (
							<div
								key={finalProjekt[currentIndex].title}
								className='projekti__images'
							>
								<img
									key={finalProjekt[currentIndex].title}
									src={finalProjekt[currentIndex].img || dummySrc}
									alt={finalProjekt[currentIndex].title}
								/>
							</div>
						) : (
							<p>Loading</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projekti;
