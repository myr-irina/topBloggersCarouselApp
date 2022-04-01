import "./Slider.css";
import User from "../User/User";

function Slider({ users }) {
	return (
		<div className='slider__container'>
			<div className='decoration-top'>
				<span className='decoration-top__image' />
			</div>
			<div className='arrow'>
				<button className='button-left'></button>
				<button className='button-right'></button>
			</div>
			<section className='slider'>
				{users &&
					users.slice(0, 4).map((user, i) => {
						return <User user={user} key={i} />;
					})}
			</section>
		</div>
	);
}

export default Slider;
