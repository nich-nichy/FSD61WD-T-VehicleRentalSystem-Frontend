import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { useVerifyToken } from '../utils/VerifyRole';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../redux/slices/vehicleSlice'


const url = import.meta.env.VITE_BACKEND_URL;

const Posts = () => {
    const { id } = useVerifyToken();
    const [allPosts, setAllPosts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get(`${url}/posts/get-posts`);
            console.log({ data })
            setAllPosts(data?.data)
            dispatch(setPosts(data?.data))
        };
        if (!allPosts || allPosts?.length === 0) {
            getPosts();
        }
    }, []);
    console.log(allPosts, "from map post")
    return (
        <div className='font-opensans'>
            <CustomNavbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
                <ul className="space-y-6">
                    {allPosts?.map((blog, n) => (
                        <li key={blog.id} className="border-b border-gray-200 pb-4">
                            <Link to={`/posts/${blog.id}`} className="block hover:bg-gray-100 p-4 rounded-lg transition">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                                <p className="text-gray-600">{blog.excerpt}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default Posts;
