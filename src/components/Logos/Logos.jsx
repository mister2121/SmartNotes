import React from "react"
import { logos } from "../../utils/constants"

const Logos = () => {
	return (
		<section className='overflow-hidden py-[33px] px-0 relative'>
			<div className='flex m-auto whitespace-nowrap max-w-[calc(100%-(87px*2))] animate-slide'>
				{logos.map((img, i) => (
					<img className='my-0 mx-10' src={img} alt='logo' key={i} />
				))}
				{logos.map((img, i) => (
					<img
						className='my-0 mx-10'
						src={img}
						alt='logo'
						key={i + logos.length}
					/>
				))}
			</div>
			<div className='absolute bg-gradient-to-left top-0 bottom-0 left-0 w-[87px]'></div>
			<div className='absolute bg-gradient-to-right top-0 bottom-0 right-0 w-[87px]'></div>
		</section>
	)
}

export default Logos
