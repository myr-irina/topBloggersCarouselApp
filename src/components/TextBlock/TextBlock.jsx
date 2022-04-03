import React from "react";
import TextItem from "../TextItem/TextItem";
import "./TextBlock.css";

function TextBlock({ selectedCard, posts }) {
	return (
		<section className='wrapper'>
			<div className='left-column'>
				<span className='citation-sign' />
				<span className='decoration-bottom' />
			</div>

			<section className='text-block'>
				<h2 className='text-block__title'>
					3 актуальных поста {selectedCard.name}
				</h2>
				{posts &&
					posts.slice(0, 3).map((post) => {
						return <TextItem post={post} key={post.id} />;
					})}
				{/* <TextItem />
				<TextItem />
				<TextItem /> */}
			</section>
		</section>
	);
}

export default TextBlock;
