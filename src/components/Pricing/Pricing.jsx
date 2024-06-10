import React, { useState } from "react"
import PricingTile from "../PricingTile/PricingTile"
import { pricingData } from "../../utils/constants"
import "./Pricing.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Pricing = () => {
	const [planPeriod, setPlanPeriod] = useState("/ monthly") // OR / yearly

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const planPeriodToggle = () => {
		planPeriod === "/ monthly"
			? setPlanPeriod("/ yearly")
			: setPlanPeriod("/ monthly")
	}

	return (
		<motion.section
			className='px-4 py-[40px] lg:px-[144px] lg:py-[96px]'
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 1 }}>
			{/* Heading section */}
			<div>
				<h1 className='text-secondary-200 text-center mb-[17px]'>
					Pricing & Plans
				</h1>
				<p className='text-primary-100 text-center'>
					With lots of unique blocks, you can easily build a page without
					coding. Build your next landing page.
				</p>
			</div>

			{/* 
                Buttons section
                Toggling button done with Pricing.css
            */}
			<div className='my-10 mx-0 flex justify-center items-center gap-[14px]'>
				<p className='text-med text-accent'>Monthly</p>
				<label className='relative display-block w-[65px] h-[33px]'>
					<input
						className='toggle-input opacity-0 w-0 h-0'
						type='checkbox'
						onClick={planPeriodToggle}
					/>
					<span className='toggle-circle'></span>
				</label>
				<p className='text-med text-accent'>Yearly</p>
				<span className='text-small text-primary-400 rounded-[40px] w-[92px] h-[26px] bg-gradient flex justify-center items-center'>
					Save 25%
				</span>
			</div>

			{/* Pricing tile section */}
			<div className='flex flex-col items-center lg:flex-row lg:justify-center gap-y-[20px] lg:gap-x-[40px]'>
				{pricingData.map((tile, i) => {
					return (
						<PricingTile
							key={i}
							{...tile}
							planPeriod={planPeriod}
							className='lg:self-stretch'
						/>
					)
				})}
			</div>
		</motion.section>
	)
}

export default Pricing
