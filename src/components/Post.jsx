import React from 'react';
import { useParams } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';

const Post = ({ posts }) => {
    const { postId } = useParams();
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return <h2 className="text-center text-2xl font-bold mt-12">Post not found!</h2>;
    }

    return (
        <div>
            <CustomNavbar />

            <div className="font-opensans container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
                <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
            </div>
        </div>
    );
};

export default Post;
