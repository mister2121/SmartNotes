import React from "react"
import { motion } from "framer-motion"
import arrow from "../../assets/arrow.svg"
import abstractShapes from "../../assets/abstract-shapes.png"

const Hero = () => {
	return (
		<motion.section
			className='flex flex-col lg:flex-row justify-around lg:gap-[101px] py-[22px] lg:py-[22px] lg:pr-[188px] lg:pl-[152px] px-6'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			<div className='flex flex-col items-center lg:items-start'>
				<h1 className='mt-[40px] lg:mt-[74px] mb-4 text-primary-100 tracking-[-1.5px] lg:tracking-[-2.5px] text-center lg:text-left'>
					<span className='mr-2 font-medium bg-gradient-to-r from-[#017373] to-[#aad9d1] inline-block text-transparent bg-clip-text'>
						Intelligent
					</span>
					cloud-based <br />
					<span className='mr-2 font-medium bg-gradient-to-r from-[#017373] to-[#aad9d1] inline-block text-transparent bg-clip-text'>
						note-taking
					</span>
					and <br />
					collaboration tool
				</h1>
				<p className='text-primary-100 mb-[30px] lg:mb-[50px] text-center lg:text-left'>
					Experience the power of smart note-taking and transform the way you
					work today.
				</p>
				<div className='relative overflow-hidden w-full lg:w-[434px] h-[48px] lg:h-[68px] rounded-xl'>
					<input
						className='w-[100%] h-[100%] m-0 p-0 pl-6 border-0 outline-0 text-sm lg:text-base placeholder:text-primary-200'
						type='email'
						placeholder='Enter your email'
					/>
					<button className='flex justify-center items-center absolute p-0 top-1.5 right-1.5 h-[36px] lg:h-[56px] w-[100px] lg:w-[135px] bg-gradient rounded-lg transition-transform hover:scale-[1.01] text-reg'>
						Sign up
						<img
							className='h-4 w-4 lg:h-6 lg:w-6 border-[1px] rounded-[5px] lg:rounded-lg border-primary-300 ml-2'
							src={arrow}
							alt='Arrow icon'
						/>
					</button>
				</div>
			</div>
			<div className='hidden lg:block'>
				<img src={abstractShapes} alt='Abstract shapes' />
			</div>
		</motion.section>
	)
}

export default Hero
