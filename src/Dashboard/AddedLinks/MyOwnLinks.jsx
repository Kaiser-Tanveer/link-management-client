import axios from 'axios';
import React, { useEffect } from 'react';
import { FaLink } from 'react-icons/fa';

const MyOwnLinks = () => {
    const [links, setLinks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/links/get')
            .then(response => {
                setLinks(response.data);
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
        <h2 className='text-xl font-semibold text-center'>My Own links</h2>
            <ol className='list'>
            {links.map((item, index) => (
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/> {links}</li>
            ))}
            </ol>
        </div>
    );
};

export default MyOwnLinks;