import p1 from '@/assets/images/partner-1.png';
import p2 from '@/assets/images/partner-2.jpg';
import p3 from '@/assets/images/partner-3.webp';
import p5 from '@/assets/images/partner-5.png';
import p6 from '@/assets/images/partner-6.jpg';
import p7 from '@/assets/images/partner-7.webp';
import p8 from '@/assets/images/partner-8.webp';

const images = [p1, p2, p3, p5, p6, p7, p8];

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
