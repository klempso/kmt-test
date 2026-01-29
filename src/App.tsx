import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import './App.css';

import { ReactLenis } from 'lenis/react';
import Divider from '../components/Divider';
import Projekti from '../components/Projekti';
import Header from '../components/Header';
import StoritveNew from '../components/StoritveNew';
import KuserSlider from '../components/KuserSlider';
import Social from '../components/Social';
import Partnerji from '../components/Partnerji';
import Footer from '../src/components/footer';

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
	const lenisRef = useRef(null);

	useEffect(() => {
		function update(time: any) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}
		gsap.ticker.add(update);

		return () => gsap.ticker.remove(update);
	}, []);
	return (
		<main>
			<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
			<Header />
			<StoritveNew />
			<Divider />
			<KuserSlider />
			<Projekti />
			<Social />
			<Partnerji />

			<Footer />
		</main>
	);
}

export default App;
