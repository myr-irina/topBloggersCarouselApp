import { useState, useEffect } from "react";
import "./styles/App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import TextBlock from "./components/TextBlock/TextBlock";
import Preloader from "./components/Preloader/Preloader";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);
	const [isCardLoading, setIsCardLoading] = useState(false);
	const [isPostsLoading, setIsPostsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [posts, setPosts] = useState([]);
	const [selectedCard, setSelectedCard] = useState({
		//TODO вставить первого пользователя по дефолту
		id: "",
		name: "",
		company: "",
	});

	function handleCardClick(card) {
		setSelectedCard({
			id: card.id,
			card: card.name,
			company: card.company.name,
		});
	}

	const visiblePosts = selectedCard.id
		? posts.filter((post) => selectedCard.id === post.userId)
		: posts.filter((post) => 1 === post.userId);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setIsCardLoading(true);
				setError(false);
				setUsers(res.data);
				setSelectedCard(res.data[0]);
				setIsCardLoading(false);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsCardLoading(false);
					setUsers([]);
				}
				console.log("Невозможно получить данные с сервера", err);
				setIsCardLoading(false);
				setUsers([]);
			});
	}, []);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				setIsPostsLoading(true);
				setError(false);
				setPosts(res.data);
				setIsPostsLoading(false);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsPostsLoading(false);
					setPosts([]);
				}
				console.log("Невозможно получить данные с сервера", err);
				setIsPostsLoading(false);
				setPosts([]);
			});
	}, []);

	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<Main
					isLoading={isCardLoading}
					users={users}
					handleCardClick={handleCardClick}
					selectedCard={selectedCard}
				/>
				{!isCardLoading && !isPostsLoading && (
					<TextBlock
						selectedCard={selectedCard}
						posts={visiblePosts}
						isPostsLoading={isPostsLoading}
						// selectedPost={selectedPost}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
