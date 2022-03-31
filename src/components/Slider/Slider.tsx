import React from "react";
import "./Slider.css";

function Slider() {
	return (
		<>
			<div className='arrow'>
				<p>
					<img className='arrow-left_image' />
				</p>
				<p>
					<img className='arrow-right_image' />
				</p>
			</div>
			<section className='slider'>
				<div className='slider__card'>
					<img className='slider__image' alt='' />
					<div className='card__title'>Иванов Сергей</div>
					<div className='card__subtitile'>Delphine</div>
				</div>
				<div className='slider__card'>
					<img className='slider__image' alt='' />
					<div className='card__title'>Иванов Сергей</div>
					<div className='card__subtitile'>Delphine</div>
				</div>
				<div className='slider__card'>
					<img className='slider__image' alt='' />
					<div className='card__title'>Иванов Сергей</div>
					<div className='card__subtitile'>Delphine</div>
				</div>
				<div className='slider__card'>
					<img className='slider__image' alt='' />
					<div className='card__title'>Иванов Сергей</div>
					<div className='card__subtitile'>Delphine</div>
				</div>
			</section>
		</>
	);
}

export default Slider;
