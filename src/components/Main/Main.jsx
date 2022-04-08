import Slider from "./../Slider/Slider";
import "./Main.css";


function Main({ users, handleCardClick, selectedCard, isLoading }) {
	return (
		<>
			<div className='decoration-top'>
				<span className='decoration-top__image' />
			</div>
			<Slider users={users} handleCardClick={handleCardClick} selectedCard={selectedCard} isLoading={isLoading}/>
		</>
	);
}

export default Main;
