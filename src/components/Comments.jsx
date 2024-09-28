import React, { useState } from 'react';

const Comments = ({ comments }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        console.log("New Comment:", newComment);
        setNewComment('');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6">Comments</h2>

            {/* Comment List */}
            <ul className="space-y-6 mb-8">
                {comments?.map((comment, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="mb-2">
                            <span className="font-bold text-gray-800">{comment.user}</span>
                            <span className="text-gray-500 text-sm ml-2">{new Date(comment.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                    </li>
                ))}
            </ul>

            {/* Add New Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-medium mb-4">Add a Comment</h3>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                    placeholder="Write your comment here..."
                    required
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default Comments;
