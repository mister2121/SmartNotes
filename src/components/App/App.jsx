import "./App.css"

//images
import doubleQuote from "../../assets/double-quote.svg"

//fonts
import "../../fonts/fonts.css"

// components
import Page from "../Page/Page"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Logos from "../Logos/Logos"
import Testimonial from "../Testimonial/Testimonial"
import Features from "../Features/Features"
import Video from "../Video/Video"
import Pricing from "../Pricing/Pricing"
import FAQ from "../FAQ/FAQ"
import CTA from "../CTA/CTA"
import Footer from "../Footer/Footer"
import Accordion from "../Accordion/Accordion"
import Navigation from "../Navigation/Navigation"

function App() {
	return (
		<Page>
			<Header>
				<Navigation />
				<Hero />
			</Header>
			<Logos />
			<Testimonial>
				<h5 className='m-0 text-center text-accent'>
					The real-time synchronization and AI-powered organization have made
					our workflow more efficient than ever.
				</h5>
				<div className='flex gap-4 h-[43px] justify-center items-end text-primary-100'>
					<p className='text-reg '>Sarah Johnson</p>
					<p className='text-reg opacity-70'>TechSavvy Solutions</p>
				</div>
				<img
					className='absolute h-6 w-[37px] top-0 left-0'
					src={doubleQuote}
					alt='quote'></img>
			</Testimonial>
			<Features />
			<Testimonial></Testimonial>
			<Video />
			<Testimonial></Testimonial>
			<Pricing />
			<Testimonial></Testimonial>
			<FAQ>
				<Accordion />
			</FAQ>
			<Testimonial></Testimonial>
			<CTA />
			<Footer />
		</Page>
	)
}

export default App
