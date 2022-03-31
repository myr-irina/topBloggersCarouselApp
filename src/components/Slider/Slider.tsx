import React from "react";
import "./Slider.css";

function Slider() {
	return (
		<div className='slider__container'>
			<div className='decoration-top'>
				<img alt='' className='decoration-top__image' />
			</div>
			<div className='arrow'>
				<button className='button-left'></button>
				<button className='button-right'></button>
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
		</div>
	);
}

export default Slider;
