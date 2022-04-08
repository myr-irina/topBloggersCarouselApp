import "./Slider.css";
import User from "../User/User";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function Slider({ users, selectedCard, handleCardClick, isLoading }) {
	const [localUsers, setLocalUsers] = useState([]);

	//добавлен useEffect, так как массив users не получается передать в useState
	useEffect(() => {
		setLocalUsers([...users]);
	}, [users]);

	function moveSliderLeft() {
		setLocalUsers((localUsers) => {
			return [localUsers[localUsers.length - 1], ...localUsers.slice(0, -1)];
		});
	}

	function moveSliderRight() {
		setLocalUsers((localUsers) => {
			return [...localUsers.slice(1), localUsers[0]];
		});
	}

	return (
		<div className='main__container'>
			<div className='window'>
				<div className='arrow'>
					<button className='button-left' onClick={moveSliderLeft}></button>
					<button className='button-right' onClick={moveSliderRight}></button>
				</div>
				{isLoading ? (
					<Preloader />
				) : (
					<section className='all-items-container'>
						{localUsers &&
							localUsers.map((user) => {
								return (
									<User
										user={user}
										key={user.id}
										handleCardClick={handleCardClick}
										isSelected={selectedCard.id === user.id}
									/>
								);
							})}
					</section>
				)}
			</div>
		</div>
	);
}

export default Slider;
