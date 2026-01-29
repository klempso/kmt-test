'use client';
import { MessageCircleQuestionMark } from 'lucide-react';
import { Hammer } from 'lucide-react';
import { HardHat } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { CircleDashed } from 'lucide-react';
import { Receipt } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import AnimatedCopy from './AnimateText';
import gsap from 'gsap';

const Storitve = () => {
	useGSAP(() => {
		const storitveStart = gsap.from(
			'.storitve__item-left, .storitve__item-box-left, .storitve__item-box-right',
			{
				scrollTrigger: {
					trigger: '.storitve__item-left',
					start: 'top bottom',
				},
				opacity: 0,
				duration: 1.5,
				yPercent: 100,
				ease: 'ease.in',
			}
		);
	});
	return (
		<section className='storitve__container'>
			<div className='storitve__item storitve__item-left'>
				<h1>Ponujamo raznovrstne in kakovostne storitve</h1>
				<AnimatedCopy>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
						sed impedit. Voluptates labore eum odio animi quasi repellendus
						excepturi provident ex nostrum, quos earum, nesciunt enim quisquam
						aliquid ab?
					</p>
				</AnimatedCopy>
			</div>
			<div className='storitve__item storitve__item-right'>
				<div className='storitve__item-box storitve__item-box-left'>
					<div className='storitve__item-box-up'>
						<div className='circle'>
							<span style={{ '--i': 0 }}></span>
							<span style={{ '--i': 1.5 }}></span>
						</div>
						<div className='storitve__item-icons-wrapper'>
							<div className='storitve__item-icons'>
								<CircleDashed className='dash' size={34} />
								<div className='kmt_orbit'>
									<div className='icon-bg'>
										<MessageCircleQuestionMark />
									</div>
									<div className='icon-bg'>
										<Hammer />
									</div>
									<div className='icon-bg'>
										{' '}
										<HardHat />
									</div>
									<div className='icon-bg'>
										<ThumbsUp />
									</div>
									<div className='icon-bg'>
										<ThumbsUp />
									</div>
									<div className='icon-bg'>
										<ThumbsUp />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='storitve__item-box-down'>
						<h2>Montaža in svetovanje</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
							eius dfssd sdf dsfsd?
						</p>
						<button>Izvedi več</button>
					</div>
				</div>
				<div className='storitve__item-box storitve__item-box-right'>
					<div className='storitve__item-box-up '>
						<div className='storitve__item-icons-wrapper-right'>
							<div className='storitve__item-card-bg storitve__item-card-bg-right'>
								<div className='storitve__item-card'>
									<div className='storitve__item-card-icon'>
										<Handshake />
									</div>
									<div className='storitve__item-card-text'>
										<p>Dostopne cene</p>
									</div>
								</div>
							</div>
							<div className='storitve__item-card-bg '>
								<div className='storitve__item-card'>
									<div className='storitve__item-card-icon storitve__item-card-icon-right'>
										<Calendar />
									</div>
									<div className='storitve__item-card-text'>
										<p>Dolgoročna ali kratkoročno</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='storitve__item-box-down'>
						<h2>Najem in prodaja</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
							eius dfssd sdf dsfsd?
						</p>
						<button>Izvedi več</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Storitve;
