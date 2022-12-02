import { useEffect, useState } from 'react';

export default function Test() {
	const [postId, setPostId] = useState(1);
	const [post, setPost] = useState(false);

	useEffect(() => {
		console.log('Component ilkte çalışır');
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((json) => console.log(json));
		let interval = setInterval(() => console.log('interval çalıştı!'), 1000);
		return () => {
			console.log('Component destroyer');
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [postId]);

	// useEffect(() => {
	// 	console.log('Component reder oldu');
	// });

	return (
		<div>
			<h3>{postId}</h3>
			{post && JSON.stringify(post)}
			<button onClick={() => setPostId((postId) => postId + 1)}>Sonraki konu</button>
			<hr />
			Test
		</div>
	);
}
