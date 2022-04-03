import "./Slider.css";
import User from "../User/User";
import {
	ITEM_WIDTH,
	MARGIN_WIDTH,
	MAX_VISIBLE_ELEMENTS,
} from "./../../utils/constants";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

function Slider({ users, selectedCard, handleCardClick, isLoading }) {
	const [offSet, setOffset] = useState(0);
	const minOffset = -((ITEM_WIDTH + MARGIN_WIDTH) * (users.length - 1));
	const maxOffset = (ITEM_WIDTH + MARGIN_WIDTH) * MAX_VISIBLE_ELEMENTS;

	function moveSliderLeft() {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - ITEM_WIDTH - MARGIN_WIDTH;
			return newOffset <= minOffset ? 0 : newOffset;
		});
	}

	function moveSliderRight() {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + ITEM_WIDTH + MARGIN_WIDTH;
			return newOffset >= maxOffset ? 0 : newOffset;
		});
	}

	return (
		<div className='main__container'>
			<div className='window'>
				<div className='arrow'>
					<button className='button-left' onClick={moveSliderRight}></button>
					<button className='button-right' onClick={moveSliderLeft}></button>
				</div>
				<section
					className='all-items-container'
					style={{
						transform: `translateX(${offSet}px)`,
					}}
				>
					{users &&
						users.map((user) => {
							return (
								<User
									user={user}
									key={user.id}
									handleCardClick={handleCardClick}
									selectedCard={selectedCard}
								/>
							);
						})}
				</section>
			</div>
		</div>
	);
}

export default Slider;
