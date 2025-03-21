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
        <article key={index} className="mb-4">
            <h4 className='font-bold'>Site Name: <span className='underline'>{link?.name}</span></h4>
            <ul>
                {link?.links?.map((item, idx) => (
                    <li key={idx} className='flex items-center gap-2'>
                        <p>{idx + 1}.</p>
                        <a href={item} target="_blank" rel="noopener noreferrer" className="flex items-center link-hover text-orange-500 bg-white">
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