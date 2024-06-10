import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ctaShapes from "../../assets/cta-shapes.png"
import arrow from "../../assets/arrow.svg"
import circleGradient from "../../assets/circle-gradient.png"

const CTA = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<section className='py-[80px] px-0 relative'>
			<div className='m-auto max-w-[921px] flex justify-center lg:justify-between'>
				{/* Left column of CTA  */}
				<motion.div
					className='flex flex-col items-center lg:items-start mx-4 max-w-[498px]'
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 1 }}>
					<h3 className='text-center lg:text-left text-[#fff] mt-[42px] mb-4'>
						Unlock the Full Potential of SmartNotes
					</h3>
					<p className='text-center lg:text-left text-accent mb-[48px]'>
						Ready to streamline your workflow and boost your productivity? Start
						your free trial of SmartNotes today and experience the power of
						smart note-taking.
					</p>
					<button className='py-4 px-[40px] flex items-center gap-4 rounded-[8px] bg-gradient transition-transform hover:scale-[1.01]'>
						<p className='m-0 leading-[20px] font-bold font-[18px] text-primary-300'>
							Sign Up for Free
						</p>
						<img
							className='h-8 w-8 box-border border border-[1px] border-primary-300 rounded-[8px]'
							src={arrow}
							alt='arrow icon facing topright corner'
						/>
					</button>
				</motion.div>

				{/* Right column of CTA  */}
				<div>
					<img
						className='hidden lg:block'
						src={ctaShapes}
						alt='Background image of abstract shapes'
					/>
				</div>
			</div>
			<img
				className='absolute top-[-250px]'
				src={circleGradient}
				alt='gradient circle'
			/>
		</section>
	)
}

export default CTA
