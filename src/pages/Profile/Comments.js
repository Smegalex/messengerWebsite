import '../../styles/pages/Profile/Comments.css';

import {Button} from "../../components/button/Button";
import {useEffect, useRef, useState} from "react";
import {createPost, getPosts} from "../../service/service";

const Comments = () => {

	const commentInputRef = useRef();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const posts = await getPosts();
			setComments(posts);
		}

		fetchData().catch(err => console.error(err))
	}, [])

	const sendCommentHandler = async (event) => {
		event.preventDefault();

		const newPost = await createPost({
			title: commentInputRef.current.value,
			body: commentInputRef.current.value,
			userId: 1,
		});

		setComments([...comments, newPost]);
	}

	return (
		<div className="comments-container">
			<div className="comments__controller">
				<input
					className="comments__input"
					ref={commentInputRef}
				/>
				<div className="comments__send-btn">
					<Button buttonType="POSITIVE" size="LARGE" onClick={sendCommentHandler}>Send</Button>
				</div>
			</div>
			<div className="comments__list">
				<ul>
					{comments.map((comment, index) => (
						<li key={index}>{comment.body}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Comments;