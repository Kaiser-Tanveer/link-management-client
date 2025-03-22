import axios from 'axios';
import React, { useEffect } from 'react';
import { FaLink } from 'react-icons/fa';

const MyOwnLinks = () => {
    const [links, setLinks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/links/get-links')
            .then(response => {
                setLinks(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h2 className="text-xl font-semibold text-center">My Own Links</h2>
            {links?.data?.map((link, index) => (
                <article key={index} className="mb-4 flex items-center">
                    <h4 className='font-bold underline w-20'>{link?.name}:</h4>
                    <hr className='border h-full w-6 border-orange-500' />
                    <ul>
                        {link?.links?.map((item, idx) => (
                            <li key={idx} className='flex items-center gap-2 border-l-2 pl-2 border-orange-500'>
                                <p>{idx + 1}.</p>
                                <a href={item} target="_blank" rel="noopener noreferrer" className="flex items-center link-hover text-orange-500">
                                    {item?.length > 30 ? `${item?.slice(0, 30)}...` : item}
                                    <FaLink className="ml-2" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>

    );
};

export default MyOwnLinks;