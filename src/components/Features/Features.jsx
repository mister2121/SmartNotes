import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./Features.css"
import { features } from "../../utils/constants"

const Features = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: window.innerWidth < 768 ? 0.1 : 0.2, // treshold is based on viewport width, smaller treshold in smaller devices
	})

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: window.innerWidth < 768 ? 0.1 : 0.2, // treshold is based on viewport width, smaller treshold in smaller devices
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	}

	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	}

	const descriptionVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<section className='py-[70px] px-0'>
			{/* Title and description of the Features */}
			<motion.div
				className='mb-[88px] flex items-center flex-col'
				initial='hidden'
				animate={inView ? "visible" : "hidden"}
				variants={containerVariants}>
				<motion.h2
					className='text-center text-primary-100 mb-[14px]'
					variants={titleVariants}
					transition={{ duration: 0.5 }}>
					Discover the Power of{" "}
					<span className='font-medium bg-gradient-to-r from-[#017373] to-[#aad9d1] inline-block text-transparent bg-clip-text'>
						SmartNotes
					</span>
				</motion.h2>
				<motion.p
					className='text-reg text-primary-100 text-center px-6 lg:m-0 lg:p-0 lg:max-w-[680px]'
					variants={descriptionVariants}
					transition={{ duration: 0.5, delay: 0.2 }}>
					SmartNotes is packed with innovative features designed to
					revolutionize the way you take notes, collaborate with others, and
					stay organized.
				</motion.p>
			</motion.div>

			{/* Features grid  */}
			{/* features-container (grid) styled in Features.css */}
			<motion.div
				ref={ref}
				className='features-container'
				variants={containerVariants}
				initial='hidden'
				animate={inView ? "visible" : "hidden"}>
				{features.map((obj, i) => {
					return (
						<motion.div
							className={`feature ${obj.gridArea} pt-8 px-8 pb-[35px] border-[1px] border-[#048c8080] rounded-lg`}
							key={i}
							variants={itemVariants}>
							<img
								className='h-8 w-8 mb-6 p-[4px] rounded-[5px] box-border border-[1px] border-secondary-200'
								src={obj.image}
								alt={obj.heading}
							/>
							<p className='text-large text-primary-100 mb-4'>{obj.heading}</p>
							<p className='text-reg text-accent'>{obj.description}</p>
						</motion.div>
					)
				})}
			</motion.div>

			{/* Background gradient  */}
			<div className='features-background-gradient w-[350px] h-[350px] absolute hidden lg:top-[125%] left-[38%]'></div>
		</section>
	)
}

export default Features
