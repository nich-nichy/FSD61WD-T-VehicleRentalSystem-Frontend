import React from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';

const Posts = ({ posts }) => {
    return (
        <div className='font-opensans'>
            <CustomNavbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
                <ul className="space-y-6">
                    {posts.map((post) => (
                        <li key={post.id} className="border-b border-gray-200 pb-4">
                            <Link to={`/posts/${post.id}`} className="block hover:bg-gray-100 p-4 rounded-lg transition">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                                <p className="text-gray-600">{post.excerpt}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default Posts;
