import React from 'react';
import SliderKmt from '../components/Slider';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const sliderItems = [
	{
		title: 'Ekipa',
		content: 'Izkušnje na terenu',
		img: '../src/assets/images/hale-one.JPG',
	},
	{
		title: 'Vizija',
		content: 'Jasna vizija',
		img: '../src/assets/images/podjetje.jpg',
	},
	{
		title: 'Izkušnje',
		content: 'Na mednarodnih tleh',
		img: '../src/assets/images/montaza.jpg',
	},
	{
		title: 'Montaža',
		content: 'Evropski standardi',
		img: '../src/assets/images/montaza-page.jpg',
	},
	{
		title: 'Nemčija',
		content: 'Lorem lala dsfa dasjf',
		img: '../src/assets/images/hale-one.JPG',
	},
	{
		title: 'Nemčija',
		content: 'Lorem lala dsfa dasjf',
		img: '../src/assets/images/hale-one.JPG',
	},
];

const KuserSlider = () => {
	const container = useRef(null);
	const sliderTop = useRef(null);
	const sliderMain = useRef(null);

	useGSAP(() => {
		gsap.from(sliderTop.current, {
			yPercent: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: sliderTop.current,
				start: 'bottom bottom',
				toggleActions: 'play',
			},
		});
		gsap.from(sliderMain.current, {
			xPercent: -100,
			opacity: 0,
			duration: 2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: sliderMain.current,
				start: 'bottom bottom',
				toggleActions: 'play',
			},
		});

		gsap.from('.kuserslider__bottom-item', {
			xPercent: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
			stagger: 0.5,
			scrollTrigger: {
				trigger: container.current,
				start: 'bottom bottom',
				toggleActions: 'play none none reverse',
			},
		});
	});
	return (
		<div className='kuserslider'>
			<div className='kuserslider__title' ref={sliderTop}>
				<h1>Podjetje z mednarodnimi izkušnjami in partnerstvi</h1>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore
					excepturi voluptates sint numquam qui temporibus eius, corporis
					ducimus reiciendis!
				</h2>
			</div>
			<div className='kuserslider__main' ref={sliderMain}>
				<SliderKmt sliderItems={sliderItems} />
			</div>

			<div className='kuserslider__bottom' ref={container}>
				<div className='kuserslider__bottom-item'>
					<div className='kuserslider__bottom-item-title'>
						<h2>15</h2>

						<h4>let izkušenj</h4>
					</div>
				</div>
				<div className='kuserslider__bottom-item'>
					<div className='kuserslider__bottom-item-title'>
						<h2>300 +</h2>

						<h4>Dokončanih projektov</h4>
					</div>
				</div>
				<div className='kuserslider__bottom-item'>
					<div className='kuserslider__bottom-item-title'>
						<h2>600 +</h2>

						<h4>Postavljenih objektov</h4>
					</div>
				</div>
				<div className='kuserslider__bottom-item'>
					<div className='kuserslider__bottom-item-title'>
						<h2>20</h2>

						<h4>Evropskih držav</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KuserSlider;
