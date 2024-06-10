import "./App.css"

//images
import doubleQuote from "../../assets/double-quote.svg"

//fonts
import "../../fonts/fonts.css"

// components
import Page from "../Page/Page"
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
			<Navigation />
			<Hero />
			<Logos />
			<Testimonial>
				<h5 className='m-0 text-center text-accent'>
					The real-time synchronization and AI-powered organization have made
					our workflow more efficient than ever.
				</h5>
				<div className='h-[43px] flex flex-col items-center mt-4 lg:flex-row lg:gap-4 lg:justify-center lg:items-end text-primary-100'>
					<p className='text-reg '>Sarah Johnson</p>
					<p className='text-reg opacity-70'>TechSavvy Solutions</p>
				</div>
				<img
					className='absolute h-6 w-[37px] top-0 left-0'
					src={doubleQuote}
					alt='quote'></img>
			</Testimonial>
			<Features />
			<Testimonial>
				<h5 className='m-0 text-center text-accent'>
					The real-time synchronization and AI-powered organization have made
					our workflow more efficient than ever.
				</h5>
				<div className='h-[43px] flex flex-col items-center mt-4 lg:flex-row lg:gap-4 lg:justify-center lg:items-end text-primary-100'>
					<p className='text-reg '>Sarah Johnson</p>
					<p className='text-reg opacity-70'>TechSavvy Solutions</p>
				</div>
				<img
					className='absolute h-6 w-[37px] top-0 left-0'
					src={doubleQuote}
					alt='quote'></img>
			</Testimonial>
			<Video />
			<Testimonial>
				<h5 className='m-0 text-center text-accent'>
					The real-time synchronization and AI-powered organization have made
					our workflow more efficient than ever.
				</h5>
				<div className='h-[43px] flex flex-col items-center mt-4 lg:flex-row lg:gap-4 lg:justify-center lg:items-end text-primary-100'>
					<p className='text-reg '>Sarah Johnson</p>
					<p className='text-reg opacity-70'>TechSavvy Solutions</p>
				</div>
				<img
					className='absolute h-6 w-[37px] top-0 left-0'
					src={doubleQuote}
					alt='quote'></img>
			</Testimonial>
			<Pricing />
			<Testimonial>
				<h5 className='m-0 text-center text-accent'>
					The real-time synchronization and AI-powered organization have made
					our workflow more efficient than ever.
				</h5>
				<div className='h-[43px] flex flex-col items-center mt-4 lg:flex-row lg:gap-4 lg:justify-center lg:items-end text-primary-100'>
					<p className='text-reg '>Sarah Johnson</p>
					<p className='text-reg opacity-70'>TechSavvy Solutions</p>
				</div>
				<img
					className='absolute h-6 w-[37px] top-0 left-0'
					src={doubleQuote}
					alt='quote'></img>
			</Testimonial>
			<FAQ>
				<Accordion />
			</FAQ>
			<Testimonial>
				<h5 className='m-0 text-center text-accent'>
					The real-time synchronization and AI-powered organization have made
					our workflow more efficient than ever.
				</h5>
				<div className='h-[43px] flex flex-col items-center mt-4 lg:flex-row lg:gap-4 lg:justify-center lg:items-end text-primary-100'>
					<p className='text-reg '>Sarah Johnson</p>
					<p className='text-reg opacity-70'>TechSavvy Solutions</p>
				</div>
				<img
					className='absolute h-6 w-[37px] top-0 left-0'
					src={doubleQuote}
					alt='quote'></img>
			</Testimonial>
			<CTA />
			<Footer />
		</Page>
	)
}

export default App
