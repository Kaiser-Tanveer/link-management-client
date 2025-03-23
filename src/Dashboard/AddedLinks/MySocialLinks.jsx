import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaGlobe, FaLink, FaDiscord, FaSnapchat, FaTelegram, FaTiktok, FaPinterest, FaTumblr } from 'react-icons/fa';

const socialIcons = {
   Facebook : FaFacebook,
   Linkedin : FaLinkedin,
   Twitter : FaTwitter,
   Whatsapp : FaWhatsapp,
   Youtube : FaYoutube,
   Discord : FaDiscord,
   Snapchat : FaSnapchat,
   Telegram : FaTelegram,
   Tiktok : FaTiktok,
   Pinterest : FaPinterest,
   Instagram : FaInstagram,
   Tumblr : FaTumblr,
   Website : FaGlobe,
};

const MySocialLinks = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
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

    return (
        <div>
            <h2 className="text-xl font-semibold text-center">My Social Links</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {loading && <p className="text-center">Loading...</p>}
            {links?.map((link, index) => {
                const Icon = socialIcons[link?.name] || FaLink;
                return (
                    <article key={index} className="mb-4 flex items-center">
                        <Icon className="text-orange-500 text-xl mr-2" />
                        <hr className="border h-full w-[20%] border-orange-500" />
                        <ul className=''>
                            <li className="flex items-center gap-2 border-l-2 pl-2 border-orange-500">
                                <p>{index + 1}.</p>
                                <a href={link?.url} target="_blank" rel="noopener noreferrer" className="flex items-center link-hover text-orange-500">
                                    {link?.url?.length > 30 ? `${link?.url.slice(0, 30)}...` : link?.url}
                                </a>
                            </li>
                        </ul>
                    </article>
                );
            })}
        </div>
    );
};

export default MySocialLinks;
