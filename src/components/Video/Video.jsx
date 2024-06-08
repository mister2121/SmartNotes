import React from "react"
import videoImg from "../../assets/video.png"
import TLgradient from "../../assets/vid-top-left-gradient.png"
import BRgradient from "../../assets/vid-bottom-right-gradient.png"
import buttonImage from "../../assets/play-button.png"

const Video = () => {
	return (
		<section className='p-16 flex justify-center relative'>
			<div className='max-h-[652px] relative overflow-hidden rounded-[20px]'>
				<img src={videoImg} alt='' />
				<button
					className='w-[114px] h-[114px] top-[50%] left-[50%] absolute -translate-y-2/4 -translate-x-2/4 z-10 cursor-pointer transition-transform hover:scale-[1.01] '
					style={{
						backgroundImage: `url(${buttonImage})`,
						maxWidth: "10vw",
						maxHeight: "10vw",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}></button>
				<div className='bg-[#048c7899] absolute top-0 bottom-0 left-0 right-0 '></div>
			</div>
			<img
				className='w-[600px] h-[600px] hidden lg:block lg:top-[10%] lg:left-[10%] z-[-1] absolute'
				src={TLgradient}
				alt='gradient'></img>
			<img
				className='w-[450px] h-[450px] hidden lg:block lg:bottom-[10%] lg:right-[10%] z-[-1] absolute rotate-6'
				src={BRgradient}
				alt='gradient'></img>
		</section>
	)
}

export default Video
