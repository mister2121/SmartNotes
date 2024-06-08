import React, { useEffect, useState } from "react"
import logo from "../../assets/logo.svg"
import arrow from "../../assets/arrow.svg"

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsMenuOpen(false)
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<nav className='relative flex justify-between items-center box-border border-borderNav border-b-[1px] px-6 py-6 lg:px-24'>
			<div className='flex gap-2 items-center z-[99]'>
				<img src={logo} alt='Logo' />
				<h3 className='font-dm-sans text-2xl leading-[140%] text-primary-100 m-0'>
					SmartNotes
				</h3>
			</div>
			<button onClick={toggleMenu} className='lg:hidden z-[99]'>
				{isMenuOpen ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6 text-primary-100 transition-transform transform rotate-180 duration-300'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6 text-primary-100 transition-transform transform rotate-0 duration-300'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				)}
			</button>
			<ul className='hidden lg:flex items-center gap-14 text-primary-100 m-0 p-0'>
				<li>
					<a href='#' className='text-reg'>
						Features
					</a>
				</li>
				<li>
					<a href='#' className='text-reg'>
						Pricing
					</a>
				</li>
				<li>
					<a href='#' className='text-reg'>
						Support
					</a>
				</li>
			</ul>
			<button className='hidden lg:flex justify-center items-center gap-2 bg-gradient rounded-lg text-regular text-primary-400 h-14 w-[167px] transition-transform hover:scale-[1.01]'>
				Get Started
				<img
					className='h-6 w-6 border-[1px] rounded-lg border-primary-300'
					src={arrow}
					alt='Arrow icon'
				/>
			</button>
			{/* Mobile menu */}
			<div
				className={`absolute top-0 left-0 w-full flex flex-col items-center p-6 mt-20 z-50 transition-all duration-500 ${
					isMenuOpen
						? "max-h-screen opacity-100 bg-primary-400"
						: "max-h-0 opacity-0 overflow-hidden"
				}`}>
				<ul className='flex flex-col items-center gap-4 text-primary-100 w-full'>
					<li className='w-full text-center'>
						<a href='#' className='text-reg'>
							Features
						</a>
					</li>
					<li className='w-full text-center'>
						<a href='#' className='text-reg'>
							Pricing
						</a>
					</li>
					<li className='w-full text-center'>
						<a href='#' className='text-reg'>
							Support
						</a>
					</li>
				</ul>
				<button className='mt-6 flex justify-center items-center gap-2 bg-gradient rounded-lg text-regular text-primary-400 h-14 w-[167px] transition-transform hover:scale-[1.01]'>
					Get Started
					<img
						className='h-6 w-6 border-[1px] rounded-lg border-primary-300'
						src={arrow}
						alt='Arrow icon'
					/>
				</button>
			</div>
		</nav>
	)
}

export default Navigation
