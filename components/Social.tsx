import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Social = () => {
	const socialRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: socialRef.current,
					start: 'top 50%', // when middle of viewport hits the section
					toggleActions: 'play none none none',
				},
			});

			tl.from('.social__left', {
				yPercent: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out',
			}).from(
				'.social__right',
				{
					yPercent: 30,
					opacity: 0,
					duration: 0.8,
					ease: 'power3.out',
				},
				'+=0', // ⬅️ 0.5s after left
			);
		},
		{ scope: socialRef },
	);

	return (
		<div className='social' ref={socialRef}>
			<div className='social__box social__left'>
				<div className='social__box-title'>
					<h3>Kontakt</h3>
					<h2>Vas zanima zaposlitev? Imate vprašanje?</h2>
				</div>
				<p>
					Stopite v kontakt z našimi strokovnjaki in pridobite informacije iz
					prve roke.
				</p>

				<a className='kmt__button'>
					Kontakt
					<ArrowRight size={20} />
				</a>
			</div>

			<div className='social__box social__right'>
				<div className='social__box-title'>
					<h3>Socialna omrežja</h3>
					<h2>Spremljajte nas preko socialnih omrežij</h2>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
					numquam?
				</p>
				<div className='social__right-icons'>
					<div className='social__icon-bg'>
						<Instagram size={30} color='#fff' />
					</div>
					<div className='social__icon-bg'>
						<Facebook size={30} color='#fff' />
					</div>
					<div className='social__icon-bg'>
						<Youtube size={30} color='#fff' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Social;
