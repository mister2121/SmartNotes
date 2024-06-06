import React from "react"
import "./Features.css"
import { features } from "../../utils/constants"

const Features = () => {
	return (
		<section className='py-[70px] px-0'>
			{/* Title and description of the Features */}
			<div className='mb-[88px] flex items-center flex-col'>
				<h2 className='text-primary-100 mb-[14px]'>
					Discover the Power of{" "}
					<span className='font-medium bg-gradient-to-r from-[#017373] to-[#aad9d1] inline-block text-transparent bg-clip-text'>
						SmartNotes
					</span>
				</h2>
				<p className='text-reg text-primary-100 text-center max-w-[680px]'>
					SmartNotes is packed with innovative features designed to
					revolutionize the way you take notes, collaborate with others, and
					stay organized.
				</p>
			</div>

			{/* Features grid  */}

			{/* features-container (grid) styled in Features.css */}
			<div className='features-container'>
				{features.map((obj, i) => {
					return (
						<div
							className={`feature ${obj.gridArea} pt-8 px-8 pb-[35px] border-[1px] border-[#048c8080] rounded-lg`}
							key={i}>
							<img
								className='h-8 w-8 mb-6 p-[4px] rounded-[5px] box-border border-[1px] border-secondary-200'
								src={obj.image}
								alt={obj.heading}
							/>
							<p className='text-large text-primary-100 mb-4'>{obj.heading}</p>
							<p className='text-reg text-accent'>{obj.description}</p>
						</div>
					)
				})}
			</div>

			{/* Background gradient  */}
			<div className='features-background-gradient w-[350px] h-[350px] absolute top-[125%] left-[38%]'></div>
		</section>
	)
}

export default Features
