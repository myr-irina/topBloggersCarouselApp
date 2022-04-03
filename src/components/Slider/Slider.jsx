import "./Slider.css";
import User from "../User/User";
import { ITEM_WIDTH } from "./../../utils/constants";

import { useCallback, useState, useEffect, useRef } from "react";
import {
	CARDS_FOR_MAX_WIN_SIZE,
	CARDS_FOR_MEDIUM_WIN_SIZE,
	CARDS_FOR_MIN_WIN_SIZE,
} from "./../../utils/constants";
import { transpile } from "typescript";
import { func } from "prop-types";

function Slider({ users }) {
	const [offSet, setOffset] = useState(0);

	function handleLeftArrowClick() {
		console.log("handleLeftArrowClick");

		setOffset((currentOffset) => {
			const newOffset = currentOffset + ITEM_WIDTH;

			console.log(newOffset);
			return Math.min(newOffset, 0);
		});
	}

	function handleRightArrowClick() {
		console.log("handleRightArrowClick");

		setOffset((currentOffset) => {
			console.log(currentOffset)
			const newOffset = currentOffset - ITEM_WIDTH;

			const maxOffset = -(ITEM_WIDTH * (users.length - 1));
			return Math.max(newOffset, maxOffset);
		});
	}

	return (
		<div className='main__container'>
			<div className='window'>
				<div className='arrow'>
					<button
						className='button-left'
						onClick={handleLeftArrowClick}
					></button>
					<button
						className='button-right'
						onClick={handleRightArrowClick}
					></button>
				</div>
				<section
					className='all-items-container'
					// ref={slider}
					style={{
						transform: `translateX(${offSet}px)`,
					}}
				>
					{users &&
						users.map((user, id) => {
							return <User user={user} key={id} />;
						})}
				</section>
			</div>
		</div>
	);
}

export default Slider;
