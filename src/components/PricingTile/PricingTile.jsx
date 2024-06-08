import React from "react"
import check from "../../assets/check.png"
import arrowDark from "../../assets/arrow.svg"
import arrowLight from "../../assets/colored-arrow.svg"

const PricingTile = ({
	plan,
	planIcon,
	planPrice,
	planPeriod,
	bullets,
	callToAction,
	darkMode,
	className,
}) => {
	const dark = darkMode ? "dark" : ""
	const price =
		planPeriod === "/ monthly" ? "$" + planPrice : "$" + planPrice * 12 * 0.75

	return (
		<div
			className={`w-full max-w-[357px] flex flex-col py-[40px] px-8 outline outline-2 outline-secondary-200 rounded-[10px] ${
				dark ? "bg-transparent" : "bg-primary-100"
			} ${className}`}>
			{/* Plan section */}
			<div className='flex justify-start items-center gap-y-0 gap-x-2 mb-8'>
				<img
					className='w-[25px] h-[25px] p-[2px] box-border border border-secondary-200 rounded-[4px]'
					src={planIcon}
					alt='plan'
				/>
				<p className='text-small text-secondary-200'>{plan}</p>
			</div>

			{/* Pricing section */}
			<div className='flex items-baseline gap-[6px] mb-8 flex-wrap'>
				<h2
					className={`leading-[0.8] ${
						dark ? "text-primary-50" : "text-primary-300"
					}`}>
					{planPrice ? price : "Custom"}
				</h2>
				<p className={`text-reg ${dark ? "text-secondary-200" : ""}`}>
					{planPrice ? planPeriod : ""}
				</p>
			</div>

			{/* Bullet section */}
			<div className='flex flex-col gap-y-2 gap-x-0 mb-8'>
				{bullets.map((bullet, i) => {
					return (
						<div className='flex align-center gap-2' key={i}>
							<img
								className='w-[17px] h-[12px]'
								src={check}
								alt='check bullet icon'
							/>
							<p className={`text-reg ${dark ? "text-accent" : ""}`}>
								{bullet}
							</p>
						</div>
					)
				})}
			</div>

			{/* CTA button */}
			<button
				className={`h-[59px] flex justify-center items-center gap-2 mt-auto mb-2 p-0 border border-secondary-200 rounded-[8px] cursor-pointer transition-transform hover:scale-[1.01] ${
					dark ? "bg-gradient" : ""
				}`}>
				<span className='text-primary-400'>{callToAction}</span>
				<img
					className={`w-[27px] h-[27px] outline outline-1  rounded-[6px] ${
						dark ? "outline-primary-300" : "outline-secondary-200"
					}`}
					src={darkMode ? arrowDark : arrowLight}
					alt='arrow icon'
				/>
			</button>
			<p className='text-tiny text-center text-primary-200 h-[1rem]'>
				{planPrice ? "No credit card required" : ""}
			</p>
		</div>
	)
}

export default PricingTile
