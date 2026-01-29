import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../src/components/ui/accordion';
import { useEffect, useState } from 'react';
import { Grid2X2, Hammer, TriangleRight } from 'lucide-react';
export default function AccordionDemo({
	items,
	goToSlide,
	currentIndex,
	finalProjekt,
	setCurrentIndex,
}) {
	const [fill, setFill] = useState(false);

	const [clicked, setClicked] = useState(false);
	const DURATION = 5000;

	const iconInterval = () => {
		const duration = DURATION;
		const start = 1;
		const end = 100;

		const steps = end - start;
		const stepTime = duration / steps;

		let current = start;

		const id = setInterval(() => {
			current += 1;

			if (current >= end) {
				clearInterval(id);
				return; // don't render 100
			}
		}, stepTime);

		return () => clearInterval(id);
	};

	useEffect(() => {
		// start progress animation
		if (!clicked) {
			const stopProgress = iconInterval();
			setFill(true);
			// when 10s is over → advance icon
			const changeIcon = setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % finalProjekt.length);
				setFill(false);
			}, DURATION);

			// cleanup when effect re-runs / unmounts
			return () => {
				stopProgress?.();
				clearTimeout(changeIcon);
			};
		}
	}, [currentIndex]);

	return (
		<Accordion
			type='single'
			collapsible
			className='projekti__accordion  my-4 w-full'
			defaultValue='item-0'
			value={`item-${currentIndex}`}
		>
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					value={`item-${index}`}
					className='projekti__accordion-item'
				>
					<AccordionTrigger onClick={() => goToSlide(index)}>
						<h2>{item.title}</h2>
					</AccordionTrigger>
					<AccordionContent>
						<h3>{item.h3}</h3>
						<p>{item.content}</p>
						<div className='projekti__accordion-icons'>
							<div className='projekti__accordion-icons-item'>
								<div className='projekti__icon-bg'>
									<TriangleRight size={24} color={'orange'} />
								</div>
								<div className='projekti__accordion-text'>
									<p>2.000 m2</p>
								</div>
							</div>
						</div>
					</AccordionContent>
					{currentIndex === index && (
						<div
							className='projekti-underline'
							style={{ width: fill ? '100%' : '1%' }}
						/>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
}
