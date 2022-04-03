import React from "react";
import TextItem from "../TextItem/TextItem";
import "./TextBlock.css";

function TextBlock({users}) {
	console.log(users)
	return (
		<section className='wrapper'>
			<div className='left-column'>
				<span className='citation-sign' />
				<span className='decoration-bottom' />
			</div>

			<section className='text-block'>
				<h2 className='text-block__title'>3 актуальных поста {users.name}</h2>
				<TextItem />
				<TextItem />
				<TextItem />
			</section>
		</section>
	);
}

export default TextBlock;
