const URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
	const response = await fetch(URL + '/users/1/posts');
	return await response.json();
}

export const createPost = async (newPost) => {
	const response = await fetch(URL + '/posts', {
		method: 'POST',
		body: JSON.stringify(newPost),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	return await response.json();
}