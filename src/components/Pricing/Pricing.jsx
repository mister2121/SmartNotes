import React, { useState } from "react"
import PricingTile from "../PricingTile/PricingTile"
import { pricingData } from "../../utils/constants"
import "./Pricing.css"

const Pricing = () => {
	const [planPeriod, setPlanPeriod] = useState("/ monthly") // OR / yearly

	const planPeriodToggle = () => {
		planPeriod === "/ monthly"
			? setPlanPeriod("/ yearly")
			: setPlanPeriod("/ monthly")
	}

	return (
		<section className='px-[144px] py-[96px]'>
			{/* Heading section */}
			<div>
				<h1 className='text-secondary-200 text-center mb-[17px] '>
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

			{/* Pricing tile section  */}
			<div className='flex justify-center gap-y-[20px] gap-x-[40px]'>
				{pricingData.map((tile, i) => {
					return <PricingTile key={i} {...tile} planPeriod={planPeriod} />
				})}
			</div>
		</section>
	)
}

export default Pricing
