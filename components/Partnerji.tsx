const images = [
	'../src/assets/images/partner-1.png',
	'../src/assets/images/partner-2.jpg',
	'../src/assets/images/partner-3.webp',
	'../src/assets/images/partner-5.png',
	'../src/assets/images/partner-6.jpg',
	'../src/assets/images/partner-7.webp',
	'../src/assets/images/partner-8.webp',
];

const Partnerji = () => {
	return (
		<div className='partnerji'>
			<div className='partnerji__title'>
				<h3>Mednarodni partnerji, ki nam zaupajo:</h3>
			</div>
			<div className='partnerji__slider blurry-edges'>
				<div className='partnerji__slider-group'>
					{images.map((img) => {
						return <img src={img} alt='slika' />;
					})}
				</div>
				<div aria-hidden className='partnerji__slider-group'>
					{images.map((img) => {
						return <img src={img} alt='slika' />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Partnerji;
