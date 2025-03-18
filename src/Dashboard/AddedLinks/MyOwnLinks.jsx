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
    console.log(links.data);
    return (
        <div>
    <h2 className="text-xl font-semibold text-center">My Own Links</h2>
    {links?.data?.map((link, index) => (
        <ol key={index} className="list">
            <h4>{link?.name}</h4>
            <ul>
                {link?.links?.map((item, idx) => (
                    <li key={idx}>
                        <a href={item} target="_blank" rel="noopener noreferrer">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </ol>
    ))}
</div>

    );
};

export default MyOwnLinks;