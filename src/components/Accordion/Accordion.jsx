import React, { useState } from "react"
import { faqItems } from "../../utils/constants"
import AccordionItem from "../AccordionItem/AccordionItem"

const Accordion = () => {
	const [openQuestion, setOpenQuestion] = useState(-1)

	return (
		<div className='flex flex-col max-w-[800px] m-auto px-6 lg:p-0'>
			{faqItems.map((item) => {
				return (
					<AccordionItem
						item={item}
						key={item.id}
						setOpenQuestion={setOpenQuestion}
						openQuestion={openQuestion}
					/>
				)
			})}
		</div>
	)
}

export default Accordion
