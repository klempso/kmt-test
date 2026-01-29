import * as React from 'react';
import avstrija1 from '@/assets/avstrija-1-mod.jpg';
import avstrija2 from '@/assets/avstrija-2-mod.jpg';
import haleOne from '@/assets/hale-one.JPG';
import banner3 from '@/assets/banner-3-mod.jpg';
import {
	Warehouse,
	House,
	Tent,
	CirclePile,
	ArrowRight,
	Hammer,
	Calendar,
	HammerIcon,
	CircleQuestionMark,
	Handshake,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { useRef, useState } from 'react';
import CircleOutline from '../components/CircleIcon';
import CircularProgress from './CircleLoader';

const storitveItems = [
	{
		title: 'Skladiščne hale',
		icon: 'hale',
		content:
			'Skladiščne hale so optimalna rešitev za dodaten skladiščni prostor, ki se lahko uporablja kot začasen ali stalen objekt. Njihova zasnovanost.',
		src: avstrija1,
	},
	{
		title: 'Večnamenski šotori',
		icon: 'sotori',
		content:
			'Skladiščne hale so optimalna rešitev za dodaten skladiščni prostor, ki se lahko uporablja kot začasen ali stalen objekt. Njihova zasnovanost.',
		src: avstrija2,
	},
	{
		title: 'Prireditveni pagode',
		icon: 'pagode',
		content:
			'Skladiščne hale so optimalna rešitev za dodaten skladiščni prostor, ki se lahko uporablja kot začasen ali stalen objekt. Njihova zasnovanost.',
		src: haleOne,
	},
	{
		title: 'Večnamenska oprema',
		icon: 'oprema',
		content:
			'Skladiščne hale so optimalna rešitev za dodaten skladiščni prostor, ki se lahko uporablja kot začasen ali stalen objekt. Njihova zasnovanost.',
		src: banner3,
	},
];

const StoritveNew = () => {
	const [progress, setProgress] = React.useState([1]);
	const [selectedIcon, setSelectedIcon] = React.useState(0);
	const [clicked, setClicked] = React.useState(false);
	const DURATION = 5000;
	const totalNumberOfCocktails = storitveItems.length;

	const iconInterval = () => {
		const duration = DURATION;
		const start = 1;
		const end = 100;

		setProgress(start); // <-- reset at cycle start

		const steps = end - start;
		const stepTime = duration / steps;

		let current = start;

		const id = setInterval(() => {
			current += 1;

			if (current >= end) {
				clearInterval(id);
				return; // don't render 100
			}

			setProgress(current);
		}, stepTime);

		return () => clearInterval(id);
	};

	const goToSlide = (index) => {
		const newIndex = (index + totalNumberOfCocktails) % totalNumberOfCocktails;
		setClicked(true);
		setSelectedIcon(newIndex);
	};

	React.useEffect(() => {
		// start progress animation
		if (!clicked) {
			const stopProgress = iconInterval();

			// when 10s is over → advance icon
			const changeIcon = setTimeout(() => {
				setSelectedIcon((prev) => (prev + 1) % 4); // cycles 1→2→3→1...
			}, DURATION);

			// cleanup when effect re-runs / unmounts
			return () => {
				stopProgress?.();
				clearTimeout(changeIcon);
			};
		}
	}, [selectedIcon]);

	useGSAP(() => {
		gsap.fromTo(
			'.storitveponudba__box-bottom-right img',
			{ opacity: 0 },
			{ xPercent: 0, opacity: 1, duration: 0.8, ease: 'power1.inOut' },
		);
		gsap.fromTo(
			'.storitveponudba__box-top-left > h1, .storitveponudba__box-top-left > p',
			{ opacity: 0 },
			{ xPercent: 0, opacity: 1, duration: 0.8, ease: 'power1.inOut' },
		);
	}, [selectedIcon]);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.storitveponudba__title',
				start: 'top bottom',
			},
		});

		tl.from('.storitveponudba__title', {
			opacity: 0,
			yPercent: 100,
			duration: 1.2,
			ease: 'power1.out',
		})
			.from(
				'.storitveponudba__box-top',
				{
					opacity: 0,
					yPercent: 40,
					duration: 0.8,
					ease: 'power1.out',
					stagger: 0.15, // if there are multiple items
				},
				'-=0.4',
			)
			.from('.storitveponudba__box-bottom-left', {
				opacity: 0,
				xPercent: -100,
				duration: 0.8,
				ease: 'power1.out',
			})
			.from('.storitveponudba__box-bottom-right', {
				opacity: 0,
				xPercent: 100,
				duration: 0.8,
				ease: 'power1.out',
			});
	});
	return (
		<section className='storitveponudba'>
			<div className='storitveponudba__title'>
				<h3>Pri nas ponujamo</h3>
				<h1>Kvalitetne storitve po evropskih standardih</h1>
			</div>
			<div className='storitveponudba__box'>
				<div className='storitveponudba__box-top'>
					<div className='storitveponudba__box-top-left'>
						<div className='box-top-left-title'>
							<h2>Raznovrstna ponudba</h2>
							<h1>{storitveItems[selectedIcon].title}</h1>
						</div>

						<p>{storitveItems[selectedIcon].content}</p>

						<a className='kmt__button' onClick={iconInterval}>
							Preglej
							<ArrowRight size={20} />
						</a>
					</div>
					<div className='storitveponudba__box-top-right'>
						<div className='box-top-icons-wrapper'>
							{storitveItems.map((item, index) => {
								return (
									<>
										<div
											className='click-wrapper'
											onClick={() => goToSlide(index)}
										>
											<CircularProgress
												value={clicked ? 0 : progress}
												size={120}
												index={index}
												showLabel
												strokeWidth={5}
												bg={selectedIcon === index ? 'dark' : 'normal'}
												fill={selectedIcon === index ? 'black' : 'white'}
												icon={item.icon}
												labelClassName='text-xl font-bold'
												renderLabel={(progress) => `${progress}%`}
												className={selectedIcon === 1 ? 'stroke-main/0' : ''}
												progressClassName={
													selectedIcon === index
														? 'stroke-main'
														: 'stroke-transparent'
												}
											/>
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
				<div className='storitveponudba__box-bottom'>
					<div className='storitveponudba__box-bottom-left'>
						<div className='storitveponudba__box-bottom-left-title'>
							<h1>Naše storitve</h1>
						</div>

						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
							dolore aliquid, corrupti cupiditate excepturi quisquam.
						</p>

						<div className='storitve__items'>
							<div className='storitve__item'>
								<div className='storitve__icon-bg'>
									<HammerIcon />
								</div>

								<a>Montaža</a>
							</div>
							<div className='storitve__item'>
								<div className='storitve__icon-bg'>
									<CircleQuestionMark />
								</div>

								<a>Svetovanje</a>
							</div>
							<div className='storitve__item'>
								<div className='storitve__icon-bg'>
									<Calendar />
								</div>

								<a>Najem</a>
							</div>
							<div className='storitve__item'>
								<div className='storitve__icon-bg'>
									<Handshake />
								</div>

								<a>Prodaja</a>
							</div>
						</div>
						<div className='button-storitve'>
							<a className='kmt__button kmt__button-storitve'>
								Kontakt
								<ArrowRight size={20} />
							</a>
						</div>
					</div>
					<div className='storitveponudba__box-bottom-right'>
						<img src={storitveItems[selectedIcon].src} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default StoritveNew;
