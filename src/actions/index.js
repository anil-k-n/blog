import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
	const reponse = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: reponse.data});
};

export const fetchUser = (id) =>  async dispatch => {
	const reponse = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({type: 'FETCH_USER', payload: reponse.data});
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());	

	_.chain(getState().posts)
	.map('userId')
	.uniq()
	.forEach(id => dispatch(fetchUser(id)))
	.value();
	console.log();
};


