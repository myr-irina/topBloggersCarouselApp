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
		name: "",
		company: "",
	});

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	// const selectedPost = selectedCard ? posts.filter(post => post.id === selectedCard)

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setIsCardLoading(true);
				setError(false);
				setUsers(res.data);
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
				<TextBlock
					selectedCard={selectedCard}
					posts={posts}
					isPostsLoading={isPostsLoading}
				/>
			</div>
		</div>
	);
}

export default App;
