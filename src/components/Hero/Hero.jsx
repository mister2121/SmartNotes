import React from "react"
import arrow from "../../assets/arrow.svg"
import abstractShapes from "../../assets/abstract-shapes.png"

const Hero = () => {
	return (
		<section className='flex justify-around gap-[101px] py-[22px] pr-[188px] pl-[152px]'>
			<div>
				<h1 className='mt-[74px] mb-4 text-primary-100 tracking-[-2.5px]'>
					<span className='mr-2 bg-gradient-to-r from-[#017373] to-[#aad9d1] inline-block text-transparent bg-clip-text'>
						Intelligent
					</span>
					cloud-based <br />
					<span className='mr-2'>note-taking</span>
					and <br />
					collaboration tool
				</h1>
				<p className='text-primary-100 mb-[50px]'>
					Experience the power of smart note-taking and transform the way you
					work today.
				</p>
				<div className='relative overflow-hidden w-[434px] h-[68px] rounded-xl'>
					<input
						className='w-[100%] h-[100%] m-0 p-0 pl-6 border-0 outline-0'
						type='email'
						placeholder='Enter your email'
					/>
					<button className='flex justify-center items-center absolute p-0 top-1.5 right-1.5 h-[56px] w-[135px] bg-gradient rounded-lg transition-transform hover:scale-[1.01] text-reg '>
						Sign up
						<img
							className='h-6 w-6 border-[1px] rounded-lg border-primary-300 ml-2'
							src={arrow}
							alt='Arrow icon'></img>
					</button>
				</div>
			</div>
			<div>
				<img src={abstractShapes} alt='Abstract shapes'></img>
			</div>
		</section>
	)
}

export default Hero
