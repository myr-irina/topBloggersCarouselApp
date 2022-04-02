import "./Slider.css";
import User from "../User/User";

import { useCallback, useState, useEffect, useRef } from "react";
import {
	CARDS_FOR_MAX_WIN_SIZE,
	CARDS_FOR_MEDIUM_WIN_SIZE,
	CARDS_FOR_MIN_WIN_SIZE,
} from "./../../utils/constants";
import { transpile } from "typescript";

function Slider({ users }) {
	// const windowWidth = window.innerWidth;
	// const [cardsQuantity, setCardsQuantity] = useState(0);

	// const renderCards = useCallback(() => {
	// 	if (windowWidth > 933) {
	// 		setCardsQuantity(CARDS_FOR_MAX_WIN_SIZE);
	// 	} else if (windowWidth > 475 && windowWidth < 933) {
	// 		setCardsQuantity(CARDS_FOR_MEDIUM_WIN_SIZE);
	// 	} else {
	// 		setCardsQuantity(CARDS_FOR_MIN_WIN_SIZE);
	// 	}
	// }, [windowWidth]);

	// useEffect(() => renderCards(), [renderCards]);

	const slider = useRef();

	// function prevHandler() {
	// 	console.log(slider)
	// 	slider.current.childNodes.map((element) => {
	// 		element.style={transform: translateX(200)}
	// 	});
	// }

	// function nextHandler() {
	// 	console.log("next");
	// }

	return (
		<div className='main__container'>
			<div className='window'>
				<div className='arrow'>
					<button className='button-left' ></button>
					<button className='button-right' ></button>
				</div>
				<section className='all-items-container' ref={slider}>
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
