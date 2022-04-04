import TextItem from "../TextItem/TextItem";
import "./TextBlock.css";

function TextBlock({ selectedCard, posts, isPostsLoading, selectedPost }) {
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
				{isPostsLoading ? (
					<h2>Идет загрузка постов...</h2>
				) : (
					posts &&
					posts.slice(0, 3).map((post) => {
						return <TextItem post={post} key={post.id} />;
					})
				)}
			</section>
		</section>
	);
}

export default TextBlock;
