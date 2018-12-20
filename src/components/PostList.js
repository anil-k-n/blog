import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import UserHeader from './UserHeader';


class PostList extends React.Component {

    compnentDidMount() {
    	this.props.fetchPosts();
    }
    renderList() {
    	return this.props.posts.map(post => {
    		return (
    			<div className="container">
    				<i className="lasrge middle aligned icon user"/> 
    				<div className="content">
    					<div className="description">
							<h2>{post.title}</h2>
    						<p>{post.body}</p>
    					</div>    					
    				</div>
                    <UserHeader userId={post.userId}/ >
    			</div>
    			);
    	});	
    }

    render() {    	
        console.log(this.props.posts);
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
};

const mapStateToProps = (state) => {
	return {posts: state.posts};
}

export default connect(mapStateToProps,{fetchPosts: fetchPosts})(PostList);