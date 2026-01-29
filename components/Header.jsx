import { useGSAP } from '@gsap/react';
import Navbar from './Navbar';
import gsap from 'gsap';
import km3Video from '@/assets/video/km_3.mp4';

import { Check } from 'lucide-react';
import { SplitText } from 'gsap/all';

const Header = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create(
			'.hero__overlay-center h1, .hero__overlay-bottom h1',
			{
				type: 'words',
			},
		);

		const buttonstart = gsap.from('.hero__overlay-button', {
			opacity: 0,
			duration: 1.5,
			yPercent: 100,
			ease: 'expo.out',
			stagger: 0.02,
		});
		const rightstart = gsap.from('.hero__overlay-right', {
			opacity: 0,
			duration: 1.5,
			yPercent: 100,
			ease: 'expo.out',
			stagger: 0.02,
		});
		const ytstart = gsap.from(
			'.hero__overlay-youtube',
			{
				opacity: 0,
				duration: 1.5,
				xPercent: 600,
				ease: 'expo.out',
			},
			'=.002',
		);
		const ytstartColor = gsap.fromTo(
			'.hero__overlay-youtube svg',
			{
				color: 'red',
				duration: 0.5,
				xPercent: 400,
				scale: 100,
				ease: 'expo.out',
			},
			{ color: 'white' },
			'=.01',
		);
		const scrollTimeline = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.hero__overlay-center',
					start: 'top 100%',
				},
			})
			.from(titleSplit.words, {
				opacity: 0,
				duration: 1.5,
				yPercent: 100,
				ease: 'expo.out',
			});
	});

	return (
		<header>
			<Navbar />
			<div className='hero'>
				<video className='hero-video' autoPlay muted loop playsinline>
					<source src={km3Video} type='video/mp4' />
				</video>

				<div className='hero__overlay'>
					<div className='hero__overlay-text'>
						<div className='hero__overlay-center'>
							<h1>
								Montaža <span>hal, šotorov in pagod</span>
							</h1>
						</div>
						<div className='hero__overlay-bottom'>
							{' '}
							<h1>v Evropi in Sloveniji</h1>
						</div>
					</div>
					<div className='hero__overlay-buttons-container'>
						<div className='hero__overlay-buttons'>
							<button className='hero__overlay-button'>
								<a href=''>Izvedite več</a>
							</button>

							<div className='hero__overlay-right'>
								<ul>
									<li>
										<Check strokeWidth={4} />
										<p>Večletne izkušnje v mednarodnem prostoru</p>
									</li>
									<li>
										<Check strokeWidth={4} />
										<p>Zaupanja mednarodnih partnerjev</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
