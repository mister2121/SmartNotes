import React, { Children } from "react"

const Testimonial = ({ children }) => {
	return (
		<section className='p-[64px]'>
			<div className='m-auto max-w-[484px] pt-6 relative'>{children}</div>
		</section>
	)
}

export default Testimonial
