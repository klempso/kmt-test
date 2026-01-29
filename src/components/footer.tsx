import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	YoutubeIcon,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';

const footerSections = [
	{
		title: 'Storitve',
		as: [
			{
				title: 'Overview',
				href: '#',
			},
			{
				title: 'Features',
				href: '#',
			},
			{
				title: 'Solutions',
				href: '#',
			},
			{
				title: 'Tutorials',
				href: '#',
			},
			{
				title: 'Pricing',
				href: '#',
			},
			{
				title: 'Releases',
				href: '#',
			},
		],
	},
	{
		title: 'Kontakt',
		as: [
			{
				title: 'About us',
				href: '#',
			},
			{
				title: 'Careers',
				href: '#',
			},
			{
				title: 'Press',
				href: '#',
			},
			{
				title: 'News',
				href: '#',
			},
			{
				title: 'Media kit',
				href: '#',
			},
			{
				title: 'Contact',
				href: '#',
			},
		],
	},
	{
		title: 'Informacije ',
		as: [
			{
				title: 'Blog',
				href: '#',
			},
			{
				title: 'Newsletter',
				href: '#',
			},
			{
				title: 'Events',
				href: '#',
			},
			{
				title: 'Help centre',
				href: '#',
			},
			{
				title: 'Tutorials',
				href: '#',
			},
			{
				title: 'Support',
				href: '#',
			},
		],
	},
];

const Footer = () => {
	return (
		<div className='flex min-h-screen flex-col kmt-footer'>
			<div className='grow bg-muted' />
			<footer className='border-t'>
				<div className='mx-auto max-w-(--breakpoint-xl)'>
					<div className='grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:px-0'>
						<div className='col-span-full xl:col-span-2'>
							{/* Logo */}
							<img src='/src/assets/images/logo_666.png' alt='' />

							<p className='mt-4 text-black dark:text-black'>
								Montaža hal, šotorov in pagod
							</p>
						</div>

						{footerSections.map(({ title, as }) => (
							<div key={title}>
								<h6 className='font-medium'>{title}</h6>
								<ul className='mt-6 space-y-4'>
									{as.map(({ title, href }) => (
										<li key={title}>
											<a
												className='text-muted-foreground hover:text-foreground'
												href={href}
											>
												{title}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<Separator />
					<div className='flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0'>
						{/* Copyright */}
						<span className='text-muted-foreground'>
							&copy; {new Date().getFullYear()}{' '}
							<a href='/' target='_blank'>
								Kušer mont d.o.o.
							</a>
							Vse pravice pridržane
						</span>

						<div className='flex items-center gap-5 text-muted-foreground'>
							<a href='#' target='_blank'>
								<FacebookIcon className='h-5 w-5' />
							</a>
							<a href='#' target='_blank'>
								<YoutubeIcon className='h-5 w-5' />
							</a>
							<a href='#' target='_blank'>
								<InstagramIcon className='h-5 w-5' />
							</a>
							<a href='#' target='_blank'>
								<LinkedinIcon className='h-5 w-5' />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
