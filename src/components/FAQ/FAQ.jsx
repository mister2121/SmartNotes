import React from "react"

const FAQ = ({ children }) => {
	return (
		<section className='py-[96px] px-0'>
			{/* Heading of the FAQ */}
			<div className='max-w-[800px] m-auto mb-[72px] px-6 lg:p-0 flex flex-col justify-center gap-y-[10px] gap-x-0 text-center'>
				<h2 className='text-primary-100 '>Frequently Asked Questions</h2>
				<p className='text-reg text-primary-200'>
					We`ve compiled a list of the most frequently asked questions about
					SmartNotes to help you get the information you need. If you have any
					other questions, feel free to reach out to our support team.
				</p>
			</div>
			{children} {/* Accordion and AccordionItem  */}
		</section>
	)
}

export default FAQ
