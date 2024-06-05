import React from "react"
import logo from "../../assets/logo.svg"
import arrow from "../../assets/arrow.svg"

const Navigation = () => {
	return (
		<nav className='flex justify-between box-border border-borderNav border-b-[1px] px-24 py-6'>
			<div className='flex gap-2 items-center'>
				<img className='' src={logo} alt='Logo' />
				<h3 className='font-dm-sans text-2xl leading-[140%] text-primary-100 m-0'>
					SmartNotes
				</h3>
			</div>
			<ul className='m-0 p-0 flex items-center gap-14 text-primary-100'>
				<a href='#' className='text-reg'>
					Features
				</a>
				<a href='#' className='text-reg'>
					Pricing
				</a>
				<a href='#' className='text-reg'>
					Support
				</a>
			</ul>
			<button className='flex justify-center items-center gap-2 bg-gradient rounded-lg text-regular text-primary-400 h-14 w-[167px] transition-transform hover:scale-[1.01] '>
				Get Started
				<img
					className='h-6 w-6 border-[1px] rounded-lg border-primary-300'
					src={arrow}
					alt='Arrow icon'
				/>
			</button>
		</nav>
	)
}

export default Navigation
