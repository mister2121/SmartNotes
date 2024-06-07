import React from "react"
import logo from "../../assets/logo.svg"
import arrow from "../../assets/colored-arrow.svg"
import facebook from "../../assets/footer/facebook.svg"
import linkedin from "../../assets/footer/linkedin.svg"
import twitter from "../../assets/footer/twitter.svg"
import youtube from "../../assets/footer/youtube.svg"

const Footer = () => {
	return (
		<footer className='border-t-[1px] border-secondary-200'>
			<div className='py-[80px] px-[144px] flex justify-center gap-[160px]'>
				{/* Footer content left  */}
				<div>
					<div className='flex items-center gap-2'>
						<img
							className='w-[38px] h-[38px] mr-2'
							src={logo}
							alt='Smart Notes logo'
						/>
						<p className='text-dm-sans text-[24px] font-bold leading-[140%] text-primary-100 margin-0'>
							SmartNotes
						</p>
					</div>
					<div className='relative w-[290px] h-[48px] mt-[35px]'>
						<input
							className='w-[100%] h-[100%] border border-[1px] border-secondary-200 border-box rounded-[8px] py-0 px-4 placeholder:text-primary-300 placeholder:text-dm-sans'
							type='email'
							placeholder='Enter email'
						/>
						<img
							className='w-[32px] h-[32px] border border-[1px] border-secondary-200 absolute top-[8px] right-[16px] cursor-pointer rounded-[8px] transition-transform hover:scale-[1.01]'
							src={arrow}
							alt='arrow icon'
						/>
					</div>
				</div>
				{/* Footer content right  */}
				<div className='flex gap-[160px]'>
					<div className='w-max'>
						<p className='text-[18px] font-bold text-accent mb-[4px]'>
							Product
						</p>
						<a href='#' className='text-[#BABABA] block'>
							About
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Features
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Pricing
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Integrations
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							FAQs
						</a>
					</div>
					<div>
						<p className='text-[18px] font-bold text-accent mb-[4px]'>
							Company
						</p>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Our Story
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Team
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Careers
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Press
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Contact us
						</a>
					</div>
					<div>
						<p className='text-[18px] font-bold text-accent mb-[4px]'>
							Resources
						</p>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Blog
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Webinars
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Case Studies
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Templates
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Help Center
						</a>
					</div>
					<div>
						<p className='text-[18px] font-bold text-accent mb-[4px]'>Legal</p>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Terms of Service
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Privacy Policy
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Cookie Policy
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Acceptable Use
						</a>
						<a
							href='#'
							className='text-[#BABABA] py-[3px] block hover:text-secondary-200'>
							Refund Policy
						</a>
					</div>
				</div>
			</div>

			{/* Footer banner at the bottom  */}
			<div className='bg-secondary-200 py-[18px] pr-[160px] pl-[144px] flex justify-between text-primary-300'>
				<p className='text-small flex items-center'>
					@2024 SmartNotes. All Rights Reserved.
					<a
						href='https://x.com/iamhervewabo'
						className='underline text-primary-300 block ml-[5px]'
						target='_blank'>
						@iamhervewabo
					</a>
				</p>
				<div className='flex gap-[10px]'>
					<button
						style={{
							backgroundImage: `url(${facebook})`,
						}}
						className='w-[40px] h-[40px] rounded-[50%] p-0 bg-secondary-300 transition-transform hover:scale-[1.05]'></button>
					<button
						style={{
							backgroundImage: `url(${linkedin})`,
						}}
						className='w-[40px] h-[40px] rounded-[50%] p-0 bg-secondary-300 transition-transform hover:scale-[1.05]'></button>
					<button
						style={{
							backgroundImage: `url(${twitter})`,
						}}
						className='w-[40px] h-[40px] rounded-[50%] p-0 bg-secondary-300 transition-transform hover:scale-[1.05]'></button>
					<button
						style={{
							backgroundImage: `url(${youtube})`,
						}}
						className='w-[40px] h-[40px] rounded-[50%] p-0 bg-secondary-300 transition-transform hover:scale-[1.05]'></button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
