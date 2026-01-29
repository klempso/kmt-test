import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../src/components/ui/accordion';
import { Warehouse, Palette, Zap } from 'lucide-react';

export default function AccordionComponent({ items, goToSlide }) {
	return (
		<Accordion
			defaultValue='item-0'
			type='single'
			collapsible
			className='my-4 w-full data-[state=open]:border-b-2 data-[state=open]:border-main dark:data-[state=open]:border-main grid gap-2'
		>
			{items.map(({ title, content, icon: Icon }, index) => (
				<AccordionItem
					key={index}
					value={`item-${index}`}
					onClick={() => goToSlide(index)}
					className='accordion__item hover:no-underline data-[state=open]:text-indigo-500 data-[state=open]:border-b-2 data-[state=open]:border-main dark:data-[state=open]:border-main py-1 px-4 bg-gray-100/40'
				>
					<AccordionTrigger className='accordion__item hover:no-underline data-[state=open]:text-main dark:data-[state=open]:text-white'>
						<div className='flex items-center gap-4 '>
							<Icon size={40} />
							<div className='accordion__text'>
								<h2
									className='"
            transition-all duration-300
            group-data-[state=open]:text-main
            dark:group-data-[state=open]:text-white
          "'
								>
									{title}
								</h2>
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent className='accordion__paragraph'>
						<p>{content}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
