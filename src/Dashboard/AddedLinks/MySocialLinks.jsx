import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';

const MySocialLinks = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
            axios.get('http://localhost:5000/api/links/get-social')
                .then(response => {
                    setLinks(response.data.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }, []);
        console.log(links);
    return (
        <div>
        <h2 className="text-xl font-semibold text-center">My Social Links</h2>
        {links?.map((link, index) => (
            <article key={index} className="mb-4 flex items-center">
                <h4 className='font-bold underline w-20'>{link?.name}:</h4>
                <hr className='border h-full w-6 border-orange-500' />
                <ul>
                        <li className='flex items-center gap-2 border-l-2 pl-2 border-orange-500'>
                            <p>{index + 1}.</p>
                            <a href={link?.url} target="_blank" rel="noopener noreferrer" className="flex items-center link-hover text-orange-500">
                                {link?.url?.length > 30 ? `${link?.url?.slice(0, 30)}...` : link?.url}
                                <FaLink className="ml-2" />
                            </a>
                        </li>
                </ul>
            </article>
        ))}
    </div>
    );
};

export default MySocialLinks;