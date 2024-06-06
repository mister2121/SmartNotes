import React from "react"
import arrow from "../../assets/colored-arrow.svg"
import arrowRight from "../../assets/colored-arrow-right.svg"

const AccordionItem = ({ item, setOpenQuestion, openQuestion }) => {
	const { question, answerHeading, answer, id } = item

	const open = openQuestion === id
	const handleQuestionClick = (id) => {
		openQuestion === id ? setOpenQuestion(-1) : setOpenQuestion(id)
	}

	return (
		<div className='mb-[20px]'>
			<button
				className='flex align-center justify-between py-[15px] px-[30px] w-[100%] border border-1 border-secondary-200 rounded-[8px]'
				onClick={() => {
					handleQuestionClick(id)
				}}>
				<p className='text-med text-primary-100 m-0'>{question}</p>
				<img
					className='w-[32px] h-[32px] rounded-[8px] box-border border border-secondary-200'
					src={arrow}
					alt='Arrow icon facing top-right corner'
				/>
			</button>
			<div
				className={`bg-accent outline-0 border border-[1px] border-secondary-200 rounded-[16px] ${
					open
						? "visible max-h-[200px] mt-[20px] opacity-1"
						: "hidden max-h-0 opacity-0"
				}`}>
				<div className='flex justify-between items-start max-w-[calc(100%-60px)] mb-[15px] mt-[20px] ml-[30px]'>
					<p className='text-med '>{answerHeading}</p>
					<img src={arrowRight} alt='Arrow icon facing right' />
				</div>
				<p className='max-w-[calc(100%-118px)] mb-[30px] ml-[30px]'>{answer}</p>
			</div>
		</div>
	)
}

export default AccordionItem
