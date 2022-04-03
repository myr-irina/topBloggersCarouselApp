import React from "react";
import "./TextItem.css";

function TextItem({ post }) {
	return (
		<>
			<h3 className='text-block__subtitle'>{post.title}</h3>
			<p className='text-block__content'>{post.body}</p>
		</>
	);
}

export default TextItem;
