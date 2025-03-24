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
            <h2 className="text-xl font-semibold text-center bg-orange-500 text-white py-3 sticky top-0 z-10 w-full">My Own Links</h2>
            {links?.data?.map((link, index) => (
                <article key={index} className="mb-4 flex items-center px-6 my-2">
                    <h4 className='font-bold w-20'>{link?.name}</h4>
                    <hr className='hidden md:block border h-full w-[20%] border-orange-500' />
                    <ul className='w-[80%] md:w-full'>
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