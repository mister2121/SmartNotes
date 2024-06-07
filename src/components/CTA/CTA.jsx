import React from "react"
import ctaShapes from "../../assets/cta-shapes.png"
import arrow from "../../assets/arrow.svg"
import circleGradient from "../../assets/circle-gradient.png"

const CTA = () => {
	return (
		<section className='py-[80px] px-0 relative'>
			<div className='m-auto max-w-[921px] flex justify-between'>
				{/* Left column of CTA  */}
				<div className='max-w-[498px]'>
					<h3 className='text-[#fff] mt-[42px] mb-4'>
						Unlock the Full Potential of SmartNotes
					</h3>
					<p className='text-accent mb-[48px]'>
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
				</div>

				{/* Right column of CTA  */}
				<div>
					<img src={ctaShapes} alt='Background image of abstract shapes' />
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
