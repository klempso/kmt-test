import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Ellipsis, Eye } from 'lucide-react';
import React from 'react';

export default function SliderKmt({ sliderItems }) {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='w-full kmt__carousel'
		>
			<div className='kmt__carousel-nav'>
				<CarouselPrevious className='kmt__carousel-nav-btn' />
				<CarouselNext className='kmt__carousel-nav-btn' />
			</div>
			<CarouselContent>
				{sliderItems.map((item, index) => (
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
						<div>
							<Card
								style={{
									backgroundImage: `url("${item.img}")`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								}}
								className='kmt__carousel-item'
							>
								<CardContent className='kmt__carousel-item-content'>
									<div className='kmt__carousel-item-content-left'>
										<h2>{item.title}</h2>
										<p>{item.content}</p>
									</div>
									<div className='kmt__carousel-item-content-right'>
										<div className='kmt__carousel-item-icon-bg'>
											<Ellipsis color='#fff' />
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
